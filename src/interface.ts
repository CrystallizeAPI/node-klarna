import { OptionalLogConfig } from './utils';

export { OptionalLogConfig } from './utils';
export { Response } from './http-request';

export * from './api/checkout-v3/interface';
export * from './api/customer-token-v1/interface';
export * from './api/order-management-v1/interface';

export interface Config {
  username: string;
  password: string;
  apiEndpoint?: string;
  logs?: OptionalLogConfig;
}
