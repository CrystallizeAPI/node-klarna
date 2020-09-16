import { IOptions } from './api';
import { CheckoutV3, ICheckoutV3 } from './resources/checkout-v3';

interface IConfig {
  apiEndpoint?: string;
  username: string;
  password: string;
}

export class Klarna {
  checkout: ICheckoutV3;

  constructor(config: IConfig) {
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

    const options: IOptions = {
      apiEndpoint,
      authorization: `Basic ${Buffer.from(`${username}:${password}`).toString(
        'base64'
      )}`,
    };

    this.checkout = new CheckoutV3(options);
  }
}
