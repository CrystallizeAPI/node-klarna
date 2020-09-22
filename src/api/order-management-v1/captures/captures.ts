import { HttpRequest, IResponse } from '../../../http-request';
import { IOrderBody } from '../../checkout-v3';

export interface ICaptures {
  capture(orderId: string, body: IOrderBody): Promise<IResponse>;
}

export class Captures extends HttpRequest {
  /**
   * https://developers.klarna.com/api/#order-management-api-create-capture
   */
  capture(orderId: string, body: IOrderBody): Promise<IResponse> {
    return this.invoke(
      `POST`,
      `/ordermanagement/v1/orders/${orderId}/captures`,
      body
    );
  }
}
