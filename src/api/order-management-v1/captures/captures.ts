import { HttpRequest, Response } from '../../../http-request';
import { CaptureBody } from './interface';

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
