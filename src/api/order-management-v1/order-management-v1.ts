import { Orders, IOrders } from './orders';
import { Captures, ICaptures } from './captures';
import { Refunds, IRefunds } from './refunds';
import { IOptions } from '../../http-request';

export interface IOrderManagementV1 {
  orders: IOrders;
  captures: ICaptures;
  refunds: IRefunds;
}

/**
 * Docs: https://developers.klarna.com/api/#order-management-api
 */
export class OrderManagementV1 {
  orders: IOrders;
  captures: ICaptures;
  refunds: IRefunds;

  constructor(options: IOptions) {
    this.orders = new Orders(options);
    this.captures = new Captures(options);
    this.refunds = new Refunds(options);
  }
}
