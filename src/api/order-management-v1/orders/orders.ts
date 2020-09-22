import { HttpRequest, IResponse } from '../../../http-request';

export interface IOrders {
  acknowledge(orderId: string): Promise<IResponse>;
}

export class Orders extends HttpRequest {
  /**
   * https://developers.klarna.com/api/#order-management-api-acknowledge-order
   */
  acknowledge(orderId: string): Promise<IResponse> {
    return this.invoke(
      `POST`,
      `/ordermanagement/v1/orders/${orderId}/acknowledge`,
      {}
    );
  }
}
