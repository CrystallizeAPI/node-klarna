import { HttpRequest, IResponse } from '../../../http-request';
import { IOrderLine } from '../../checkout-v3';

export interface ICaptures {
  capture(orderId: string, body: ICaptureBody): Promise<IResponse>;
}

interface ICaptureBody {
  captured_amount: number;
  description?: string;
  reference?: string;
  order_lines?: Array<IOrderLine>;
  shipping_delay?: number;
}

export class Captures extends HttpRequest {
  /**
   * https://developers.klarna.com/api/#order-management-api-create-capture
   */
  capture(orderId: string, body: ICaptureBody): Promise<IResponse> {
    return this.invoke(
      `POST`,
      `/ordermanagement/v1/orders/${orderId}/captures`,
      body
    );
  }
}
