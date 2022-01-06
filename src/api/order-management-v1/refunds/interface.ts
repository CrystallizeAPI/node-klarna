import { OrderLine } from '../../checkout-v3';

export interface RefundBody {
  refunded_amount: number;
  description?: string;
  reference?: string;
  order_lines: Array<OrderLine>;
}
