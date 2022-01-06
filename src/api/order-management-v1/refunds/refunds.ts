import { HttpRequest, Response } from '../../../http-request';
import { RefundBody } from './interface';

export class Refunds extends HttpRequest {
  /**
   * https://developers.klarna.com/api/#order-management-api-create-a-refund
   */
  create(orderId: string, body: RefundBody): Promise<Response> {
    return this.invoke(
      `POST`,
      `/ordermanagement/v1/orders/${orderId}/refunds`,
      body
    );
  }
}
