import { HttpRequest, IResponse } from '../../http-request';
import { ICustomerTokenBody } from './interface';

export interface ICustomerTokenV1 {
  order(token: string, body: ICustomerTokenBody): Promise<IResponse>;
}

/**
 * Docs: https://developers.klarna.com/documentation/klarna-payments/integration-guide/place-order/#4-3-place-recurring-order-tokenization
 */
export class CustomerTokenV1 extends HttpRequest {
  order(token: string, body: ICustomerTokenBody): Promise<IResponse> {
    return this.invoke(
      `POST`,
      `/customer-token/v1/tokens/${token}/order`,
      body
    );
  }
}
