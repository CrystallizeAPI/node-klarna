import { Options } from './http-request';
import { CheckoutV3 } from './api/checkout-v3';
import { CustomerTokenV1 } from './api/customer-token-v1';
import { OrderManagementV1 } from './api/order-management-v1';
import { optionalLoggerFactory } from './utils';
import { Config } from './interface';
import { validateConfig } from './validations';
import { getBasicAuthHeader } from './utils/http';

export * from './interface';
export * from './crystallize-helpers';

export class Klarna {
  checkoutV3: CheckoutV3;
  customerTokenV1: CustomerTokenV1;
  orderManagementV1: OrderManagementV1;

  constructor(config: Config) {
    const validationError = validateConfig(config);

    if (validationError) {
      throw validationError;
    }

    const logger = optionalLoggerFactory(config.logs);

    const { apiEndpoint } = config;
    const defaultApiEndpoint = 'api.playground.klarna.com';

    if (!apiEndpoint) {
      logger.warn(
        '\x1b[33m',
        `⚠️   apiEndpoint field not provided while initializing library. Default API endpoint set to: ${defaultApiEndpoint} [Test EU]`,
        '\x1b[0m'
      );
    }

    const options: Options = {
      apiEndpoint: apiEndpoint || defaultApiEndpoint,
      authorization: getBasicAuthHeader(config),
      logger,
    };

    this.checkoutV3 = new CheckoutV3(options);
    this.customerTokenV1 = new CustomerTokenV1(options);
    this.orderManagementV1 = new OrderManagementV1(options);
  }
}
