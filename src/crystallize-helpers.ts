import {
  IMerchantObj,
  IShippingOption,
  IOrderBody,
  IOrderLine,
} from './api/checkout-v3';

export interface IDefaults {
  host_uri: string;
  purchase_country?: string;
  purchase_currency?: string;
  locale?: string;
  merchant_urls?: IMerchantObj;
  shipping_options?: Array<IShippingOption>;
}

interface ISubscriptionPlan {
  id: string;
  initialPeriod: number;
  initialPrice: number;
  name: string;
  recurringPeriod: number;
  recurringPrice: number;
}

export interface ICrystallizeLineItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  isDefault: boolean;
  priceWithoutVat: number;
  quantity: number;
  stock: number;
  subscriptionPlans: Array<ISubscriptionPlan>;
  vatAmount: number;
  taxGroup: {
    name: string;
    percent: number;
  };
  image: {
    url: string;
  };
}

interface IParsedOrderLines {
  order_lines: Array<IOrderLine>;
  order_tax_amount: number;
  order_amount: number;
}

function getPackageDefaults(host_uri: string): IDefaults {
  return {
    host_uri,
    purchase_country: 'NO',
    purchase_currency: 'NOK',
    locale: 'nb-NO',
    merchant_urls: {
      terms: `${host_uri}/salgsbetingelser/`,
      checkout: `${host_uri}/checkout`,
      confirmation: `${host_uri}/confirmation/?orderId={checkout.order.id}`,
      push: `${host_uri}/klarna/push/{checkout.order.id}`,
    },
    shipping_options: [
      {
        id: 1,
        name: 'Hjemlevering',
        description: 'Rett i postkassen',
        price: 4900,
        tax_amount: 639,
        tax_rate: 1500,
        preselected: true,
      },
    ],
  };
}

export class CrystallizeKlarnaHelpers {
  defaults: IDefaults;

  constructor(defaults: IDefaults) {
    if (!defaults?.host_uri) {
      console.warn(
        '\x1b[33m',
        '⚠️   host_uri property is mandatory while initialising CrystallizeKlarnaHelpers',
        '\x1b[0m'
      );
    }

    this.defaults = defaults;
  }

  getKlarnaOrderLines(
    lineItems: Array<ICrystallizeLineItem>
  ): IParsedOrderLines {
    let order_tax_amount = 0;
    let order_amount = 0;

    const order_lines: Array<IOrderLine> = lineItems.map(item => {
      order_tax_amount += item.vatAmount * 100;

      // Klarna represents numbers as number * 100
      // Ex: 11.59 becomes 1159. 9 becomes 900
      const amount = item.price * 100 * item.quantity;
      order_amount += amount;

      return {
        name: item.name,
        reference: item.sku,
        quantity: item.quantity,
        tax_rate: item.taxGroup.percent * 100 || 0,
        unit_price: item.price * 100,
        merchant_data: JSON.stringify({
          productId: item.id,
          subscription: item?.subscriptionPlans?.length > 0 ? true : false,
        }),
        image_url: item.image.url,
        total_amount: amount,
        total_tax_amount: item.vatAmount * 100,
      };
    });

    return {
      order_lines,
      order_amount,
      order_tax_amount,
    };
  }

  isSubscription(lineItems: Array<ICrystallizeLineItem>): boolean {
    let hasSubscription: boolean = false;
    lineItems.forEach((i: ICrystallizeLineItem) => {
      if (i.subscriptionPlans.length > 0) {
        hasSubscription = true;
      }
    });
    return hasSubscription;
  }

  getOrderBody(lineItems: Array<ICrystallizeLineItem>): IOrderBody {
    const {
      order_lines,
      order_amount,
      order_tax_amount,
    }: IParsedOrderLines = this.getKlarnaOrderLines(lineItems);
    const packageDefaults: IDefaults = getPackageDefaults(
      this.defaults.host_uri
    );

    // Something to look into: Will the merchant urls or purchase currency be different for separate orders?
    const orderBody: IOrderBody = {
      purchase_country:
        this.defaults?.purchase_country || packageDefaults.purchase_currency!,
      purchase_currency:
        this.defaults.purchase_currency || packageDefaults.purchase_currency!,
      locale: this.defaults.locale || packageDefaults.locale!,
      merchant_urls: {
        terms:
          this.defaults.merchant_urls?.terms ||
          packageDefaults.merchant_urls?.terms!,
        checkout:
          this.defaults.merchant_urls?.checkout ||
          packageDefaults.merchant_urls?.checkout!,
        confirmation:
          this.defaults?.merchant_urls?.confirmation ||
          packageDefaults?.merchant_urls?.confirmation!,
        push:
          this.defaults.merchant_urls?.push ||
          packageDefaults.merchant_urls?.push!,
      },
      shipping_options:
        this.defaults?.shipping_options! || packageDefaults?.shipping_options!,
      order_lines,
      order_tax_amount,
      order_amount,
      recurring: this.isSubscription(lineItems),
    };

    return orderBody;
  }
}
