import { Orders } from './orders';
import { Captures } from './captures';
import { Refunds } from './refunds';
import { Options } from '../../http-request';

/**
 * Docs: https://developers.klarna.com/api/#order-management-api
 */
export class OrderManagementV1 {
  orders: Orders;
  captures: Captures;
  refunds: Refunds;

  constructor(options: Options) {
    this.orders = new Orders(options);
    this.captures = new Captures(options);
    this.refunds = new Refunds(options);
  }
}
