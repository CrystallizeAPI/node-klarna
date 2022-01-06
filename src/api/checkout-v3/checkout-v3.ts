import { HttpRequest } from '../../http-request';
import { OrderBody, OrderResponse } from './interface';

/*
 * Documentation: https://developers.klarna.com/api/#checkout-api
 */
export class CheckoutV3 extends HttpRequest {
  /*
    Documentation: https://developers.klarna.com/api/#checkout-api-create-a-new-order
  */
  createOrder(body: OrderBody): Promise<OrderResponse> {
    return this.invoke(`POST`, `/checkout/v3/orders`, body);
  }

  /*
    Documentation: https://developers.klarna.com/api/#checkout-api-retrieve-an-order
  */
  retrieveOrder(orderId: string): Promise<OrderResponse> {
    if (!orderId) {
      this.logger.warn(
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
  updateOrder(orderId: string, body: OrderBody): Promise<OrderResponse> {
    if (!orderId) {
      this.logger.warn(
        '\x1b[33m',
        '⚠️   Order ID is required to update an order',
        '\x1b[0m'
      );
    }
    return this.invoke(`POST`, `/checkout/v3/orders/${orderId}`, body);
  }
}
