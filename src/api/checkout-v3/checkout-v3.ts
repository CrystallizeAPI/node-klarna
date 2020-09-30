import { HttpRequest } from '../../http-request';
import { IOrderBody, IOrderResponse } from './interface';

export interface ICheckoutV3 {
  createOrder(body: IOrderBody): Promise<IOrderResponse>;
  retrieveOrder(orderId: string): Promise<IOrderResponse>;
  updateOrder(orderId: string, body: IOrderBody): Promise<IOrderResponse>;
}

/*
 * Documentation: https://developers.klarna.com/api/#checkout-api
 */
export class CheckoutV3 extends HttpRequest {
  /*
    Documentation: https://developers.klarna.com/api/#checkout-api-create-a-new-order  
  */
  createOrder(body: IOrderBody): Promise<IOrderResponse> {
    return this.invoke(`POST`, `/checkout/v3/orders`, body);
  }

  /*
    Documentation: https://developers.klarna.com/api/#checkout-api-retrieve-an-order
  */
  retrieveOrder(orderId: string): Promise<IOrderResponse> {
    if (!orderId) {
      console.warn(
        '\x1b[33m',
        '⚠️   Order ID is required to fetch an order',
        '\x1b[0m'
      );
    }
    return this.invoke(`GET`, `/checkout/v3/orders/${orderId}`);
  }

  /*
    Documentation: https://developers.klarna.com/api/#checkout-api-update-an-order
  */
  updateOrder(orderId: string, body: IOrderBody): Promise<IOrderResponse> {
    if (!orderId) {
      console.warn(
        '\x1b[33m',
        '⚠️   Order ID is required to update an order',
        '\x1b[0m'
      );
    }
    return this.invoke(`POST`, `/checkout/v3/orders/${orderId}`, body);
  }
}
