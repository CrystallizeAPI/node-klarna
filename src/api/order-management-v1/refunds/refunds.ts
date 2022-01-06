import { HttpRequest, Response } from '../../../http-request';
import { OrderLine } from '../../checkout-v3';

interface RefundBody {
  refunded_amount: number;
  description?: string;
  reference?: string;
  order_lines: Array<OrderLine>;
}

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
