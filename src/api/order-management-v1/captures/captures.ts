import { HttpRequest, Response } from '../../../http-request';
import { OrderLine } from '../../checkout-v3';

interface CaptureBody {
  captured_amount: number;
  description?: string;
  reference?: string;
  order_lines?: Array<OrderLine>;
  shipping_delay?: number;
}

export class Captures extends HttpRequest {
  /**
   * https://developers.klarna.com/api/#order-management-api-create-capture
   */
  capture(orderId: string, body: CaptureBody): Promise<Response> {
    return this.invoke(
      `POST`,
      `/ordermanagement/v1/orders/${orderId}/captures`,
      body
    );
  }
}
