import { IResponse } from '../../http-request';

interface IOrderLines {
  name: string;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  total_amount: number;
  total_tax_amount: number;
}

interface IMerchantObj {
  terms: string;
  checkout: string;
  confirmation: string;
  push: string;
}

export interface IOrder {
  purchase_country: string;
  purchase_currency: string;
  locale: string;
  order_amount: number;
  order_tax_amount: number;
  order_lines: Array<IOrderLines>;
  merchant_urls: IMerchantObj;
}

export interface IOrderResponse extends IResponse {
  statusCode: number;
  error?: Error;
  response?: {
    order_id: string,
    status: string,
    purchase_country: string,
    purchase_currency: string,
    locale: string,
    order_amount: number,
    order_tax_amount: number,
    order_lines: Array<IOrderLines>,
    merchant_urls: IMerchantObj,
    html_snippet: string
  }
}