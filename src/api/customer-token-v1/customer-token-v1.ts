import { HttpRequest, Response } from '../../http-request';
import { CustomerTokenBody } from './interface';

/**
 * Docs: https://developers.klarna.com/documentation/klarna-payments/integration-guide/place-order/#4-3-place-recurring-order-tokenization
 */
export class CustomerTokenV1 extends HttpRequest {
  order(token: string, body: CustomerTokenBody): Promise<Response> {
    return this.invoke(
      `POST`,
      `/customer-token/v1/tokens/${token}/order`,
      body
    );
  }
}
