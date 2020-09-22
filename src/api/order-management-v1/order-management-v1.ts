import { IOrders, Orders } from './orders';
import { IOptions } from '../../http-request';
import { Captures, ICaptures } from './captures';

export interface IOrdermanagementV1 {
  orders: IOrders;
  captures: ICaptures;
}

/**
 * Docs: https://developers.klarna.com/api/#order-management-api
 */
export class OrdermanagementV1 {
  orders: IOrders;
  captures: ICaptures;

  constructor(options: IOptions) {
    this.orders = new Orders(options);
    this.captures = new Captures(options);
  }
}
