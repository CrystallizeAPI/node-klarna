import { Response } from '../../http-request';

export interface OrderLine {
  type?: string;
  reference?: string;
  name: string;
  quantity: number;
  quantity_unit?: string;
  unit_price: number;
  tax_rate: number;
  total_amount: number;
  total_discount_amount?: number;
  total_tax_amount: number;
  image_url?: string;
  merchant_data?: string;
}

export interface MerchantUrls {
  terms: string;
  checkout: string;
  confirmation: string;
  push: string;
}

export interface OrderBody {
  purchase_country: string;
  purchase_currency: string;
  locale: string;
  order_amount: number;
  order_tax_amount: number;
  order_lines: Array<OrderLine>;
  merchant_urls: MerchantUrls;
  recurring?: boolean;
  shipping_options?: ShippingOption[];
  merchant_reference1?: string;
  merchant_reference2?: string;
}

export interface ShippingOption {
  id: string;
  name: string;
  description?: string;
  promo?: string;
  price: number;
  preselected?: boolean;
  tax_amount: number;
  tax_rate: number;
  shipping_method?: string;
  delivery_details?: {
    carrier?: string;
    class?: string;
    product?: {
      name: string;
      identifier: string;
    };
    timeslot?: {
      id: string;
      start: string;
      end: string;
    };
    pickup_location?: {
      id: string;
      name: string;
      address: Address;
    };
    tms_reference?: string;
  };
  merchant_data?: string;
}

export interface Address {
  given_name?: string;
  family_name?: string;
  email?: string;
  title?: string;
  street_address?: string;
  street_address2?: string;
  street_number?: string;
  postal_code?: string;
  city?: string;
  region?: string;
  phone?: string;
  country?: string;
  reference?: string;
  attention?: string;
  care_of?: string;
}

export interface Order {
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
  order_lines: Array<OrderLine>;
  merchant_urls: MerchantUrls;
  billing_address: Address;
  shipping_address: Address;
  html_snippet: string;
  recurring: boolean;
  recurring_token: string;
  recurring_description: string;
  merchant_reference1?: string;
  merchant_reference2?: string;
  selected_shipping_option?: ShippingOption;
}

export interface OrderResponse extends Response {
  statusCode: number;
  error?: Error | any;
  response?: Order;
}
