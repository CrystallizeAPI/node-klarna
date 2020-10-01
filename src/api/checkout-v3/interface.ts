import { IResponse } from '../../http-request';

export interface IOrderLine {
  name: string;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  total_amount: number;
  total_tax_amount: number;
}

export interface IMerchantObj {
  terms: string;
  checkout: string;
  confirmation: string;
  push: string;
}

export interface IOrderBody {
  purchase_country: string;
  purchase_currency: string;
  locale: string;
  order_amount: number;
  order_tax_amount: number;
  order_lines: Array<IOrderLine>;
  merchant_urls: IMerchantObj;
  recurring?: boolean;
}

export interface IShippingOption {
  id: number;
  name: string;
  description: string;
  price: number;
  tax_amount: number;
  tax_rate: number;
  preselected: boolean;
}

export interface IAddress {
  given_name: string;
  family_name: string;
  email: string;
  title: string;
  street_address: string;
  street_address2: string;
  street_number: string;
  postal_code: string;
  city: string;
  region: string;
  phone: string;
  country: string;
  reference: string;
  attention: string;
  care_of: string;
}

export interface IOrder {
  order_id: string;
  status: string;
  purchase_country: string;
  purchase_currency: string;
  started_at: string;
  last_modified_at: string;
  completed_at: string;
  locale: string;
  order_amount: number;
  order_tax_amount: number;
  order_lines: Array<IOrderLine>;
  merchant_urls: IMerchantObj;
  billing_address: IAddress;
  shipping_address: IAddress;
  html_snippet: string;
  recurring: boolean;
  recurring_token: string;
  recurring_description: string;
}

export interface IOrderResponse extends IResponse {
  statusCode: number;
  error?: Error;
  response?: IOrder;
}
