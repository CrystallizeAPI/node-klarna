import { HttpRequest, IResponse } from '../../../http-request';
import { IOrderLine } from '../../checkout-v3';

interface IRefundBody {
  refunded_amount: number;
  description?: string;
  reference?: string;
  order_lines: Array<IOrderLine>;
}

export class Refunds extends HttpRequest {
  /**
   * https://developers.klarna.com/api/#order-management-api-create-a-refund
   */
  create(orderId: string, body: IRefundBody): Promise<IResponse> {
    return this.invoke(
      `POST`,
      `/ordermanagement/v1/orders/${orderId}/refunds`,
      body
    );
  }
}
