import { Options } from './http-request';
import { CheckoutV3 } from './api/checkout-v3';
import { CustomerTokenV1 } from './api/customer-token-v1';
import { OrderManagementV1 } from './api/order-management-v1';
export * from './crystallize-helpers';

interface Config {
  username: string;
  password: string;
  apiEndpoint?: string;
}

export class Klarna {
  checkoutV3: CheckoutV3;
  customerTokenV1: CustomerTokenV1;
  orderManagementV1: OrderManagementV1;

  constructor(config: Config) {
    let { apiEndpoint } = config;
    const { username, password } = config;

    if (!apiEndpoint || apiEndpoint === '') {
      console.warn(
        '\x1b[33m',
        '⚠️   apiEndpoint field not provided while initializing library. Default API endpoint set to: https://api.playground.klarna.com [Test EU]',
        '\x1b[0m'
      );
      apiEndpoint = 'api.playground.klarna.com';
    }

    if (!username || username === '') {
      throw new Error('`username` is mandatory');
    }

    if (!password || password === '') {
      throw new Error('`password` is mandatory');
    }

    const options: Options = {
      apiEndpoint,
      authorization: `Basic ${Buffer.from(`${username}:${password}`).toString(
        'base64'
      )}`,
    };

    this.checkoutV3 = new CheckoutV3(options);
    this.customerTokenV1 = new CustomerTokenV1(options);
    this.orderManagementV1 = new OrderManagementV1(options);
  }
}
