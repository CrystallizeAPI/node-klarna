import Api, { IResponse } from '../api';

/*
 * Documentation: https://developers.klarna.com/api/#checkout-api
 */
interface IOrderLines {
  name: string;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  total_amount: number;
  total_tax_amount: number;
}

interface IMerchantObj {
  terms: string;
  checkout: string;
  confirmation: string;
  push: string;
}

interface IOrder {
  purchase_country: string;
  purchase_currency: string;
  locale: string;
  order_amount: number;
  order_tax_amount: number;
  order_lines: Array<IOrderLines>;
  merchant_urls: IMerchantObj;
}

export interface ICheckoutV3 {
  createOrder(body: IOrder): Promise<IResponse>;
  retrieveOrder(orderId: string): Promise<IResponse>;
  updateOrder(orderId: string, body: IOrder): Promise<IResponse>;
}

export class CheckoutV3 extends Api {
  /*
    Documentation: https://developers.klarna.com/api/#checkout-api-create-a-new-order  
  */
  createOrder(body: IOrder): Promise<IResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.invoke(`POST`, `/checkout/v3/orders`, body);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  /*
    Documentation: https://developers.klarna.com/api/#checkout-api-retrieve-an-order
  */
  retrieveOrder(orderId: string): Promise<IResponse> {
    if (!orderId) {
      console.warn(
        '\x1b[33m',
        '⚠️   Order ID is required to fetch an order',
        '\x1b[0m'
      );
    }

    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.invoke(
          `GET`,
          `/checkout/v3/orders/${orderId}`
        );
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  /*
    Documentation: https://developers.klarna.com/api/#checkout-api-update-an-order
  */
  updateOrder(orderId: string, body: IOrder): Promise<IResponse> {
    if (!orderId) {
      console.warn(
        '\x1b[33m',
        '⚠️   Order ID is required to update an order',
        '\x1b[0m'
      );
    }

    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.invoke(
          `POST`,
          `/checkout/v3/orders/${orderId}`,
          body
        );
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }
}
