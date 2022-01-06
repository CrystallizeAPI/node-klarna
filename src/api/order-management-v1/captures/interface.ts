import { OrderLine } from '../../checkout-v3';

export interface CaptureBody {
  captured_amount: number;
  description?: string;
  reference?: string;
  order_lines?: Array<OrderLine>;
  shipping_delay?: number;
}
