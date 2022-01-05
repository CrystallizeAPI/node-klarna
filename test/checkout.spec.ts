import * as dotenv from 'dotenv';
import { Klarna, IKlarnaInstance } from '../src';

dotenv.config();

const username = process.env.KLARNA_USERNAME;
const password = process.env.KLARNA_PASSWORD;

describe('checkout v3', () => {
  let klarna: IKlarnaInstance;
  let orderId: string;

  beforeAll(done => {
    if (username && password) {
      klarna = new Klarna({ username, password });
      done();
    }
  });

  it('should create an order', async () => {
    const dummyOrderObj = {
      purchase_country: 'NO',
      purchase_currency: 'NOK',
      locale: 'nb-NO',
      order_amount: 50000,
      order_tax_amount: 4545,
      order_lines: [
        {
          type: 'physical',
          reference: '19-402-NO',
          name: 'Random product',
          quantity: 5,
          unit_price: 10000,
          tax_rate: 1000,
          total_amount: 50000,
          total_tax_amount: 4545,
        },
      ],
      merchant_urls: {
        checkout: 'https://www.example.com/terms.html',
        confirmation: 'https://www.example.com/confirmation',
        push: 'https://www.example.com/confirmation',
        terms: 'https://www.example.com/terms',
      },
    };

    const dummyOrder = await klarna.checkoutV3.createOrder(dummyOrderObj);
    if (dummyOrder?.response?.order_id) {
      orderId = dummyOrder.response.order_id;
    }
    expect(dummyOrder).toHaveProperty('statusCode', 201);
  });

  it('should retrieve an order', async () => {
    const order = await klarna.checkoutV3.retrieveOrder(orderId);
    expect(order).toHaveProperty('statusCode', 200);
  });

  it('should update an order', async () => {
    const dummyUpdateOrderObj = {
      purchase_country: 'NO',
      purchase_currency: 'NOK',
      locale: 'nb-NO',
      order_amount: 50000,
      order_tax_amount: 4545,
      order_lines: [
        {
          type: 'physical',
          reference: '19-402-NO-update', // changed reference
          name: 'Random product',
          quantity: 5,
          unit_price: 10000,
          tax_rate: 1000,
          total_amount: 50000,
          total_tax_amount: 4545,
        },
      ],
      merchant_urls: {
        checkout: 'https://www.example.com/terms.html',
        confirmation: 'https://www.example.com/confirmation',
        push: 'https://www.example.com/confirmation',
        terms: 'https://www.example.com/terms',
      },
    };

    const order = await klarna.checkoutV3.updateOrder(
      orderId,
      dummyUpdateOrderObj
    );
    expect(order).toHaveProperty('statusCode', 200);
  });
});
