import { IOrderLine } from '../checkout-v3';

export interface ICustomerTokenBody {
  attachment?: {
    body: string;
    content_type: string;
  };
  auto_capture?: boolean;
  customer_token_order_merchant_urls?: {
    confirmation: string;
    push?: string;
  };
  merchant_data?: string;
  merchant_reference1?: string;
  merchant_reference2?: string;
  order_amount: number;
  order_lines: IOrderLine[];
  order_tax_amount: number;
  payment_method_reference?: string;
  purchase_currency: string;
}
