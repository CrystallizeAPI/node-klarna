import * as dotenv from 'dotenv';
import { Klarna } from '../src';
dotenv.config();

const username = process.env.KLARNA_USERNAME;
const password = process.env.KLARNA_PASSWORD;

describe('initiate library', () => {
  it('library should have checkout property', async () => {
    const klarna = new Klarna({
      username: 'username',
      password: 'password',
    });
    
    expect(klarna).toHaveProperty('checkout');
  });
});

describe('checkout v3', () => {
  
  it('should create an order', async () => {    
    const dummyOrderObj = {
      purchase_country: 'NO',
      purchase_currency: 'NOK',
      locale: 'nb-NO',
      order_amount: 50000,
      order_tax_amount: 4545,
      order_lines: [{
        type: "physical",
        reference: "19-402-NO",
        name: "Random product",
        quantity: 5,
        unit_price: 10000,
        tax_rate: 1000,
        total_amount: 50000,
        total_tax_amount: 4545,
      }],
      merchant_urls: {
        checkout: "https://www.example.com/terms.html",
        confirmation: "https://www.example.com/confirmation",
        push: "https://www.example.com/confirmation",
        terms: "https://www.example.com/terms"
      }
    };

    if (username && password) {
      const klarna = new Klarna({ username, password });
      const dummyOrder = await klarna.checkout.createOrder(dummyOrderObj);
      expect(dummyOrder).toHaveProperty('statusCode', 201);
    } else {
      expect(username || password).toBeFalsy();
    }
  });


  it('should retrieve an order', async () => {    
    if (username && password) {
      const klarna = new Klarna({ username, password });
      const order = await klarna.checkout.retrieveOrder('f5f35214-eba5-6093-b212-501c3d6038a8');
      expect(order).toHaveProperty('statusCode', 200);
    } else {
      expect(username || password).toBeFalsy();
    }
  });

  it('should update an order', async () => {

    const dummyUpdateOrderObj = {
      purchase_country: 'NO',
      purchase_currency: 'NOK',
      locale: 'nb-NO',
      order_amount: 50000,
      order_tax_amount: 4545,
      order_lines: [{
        type: "physical",
        reference: "19-402-NO-update", // changed reference
        name: "Random product",
        quantity: 5,
        unit_price: 10000,
        tax_rate: 1000,
        total_amount: 50000,
        total_tax_amount: 4545,
      }],
      merchant_urls: {
        checkout: "https://www.example.com/terms.html",
        confirmation: "https://www.example.com/confirmation",
        push: "https://www.example.com/confirmation",
        terms: "https://www.example.com/terms"
      }
    };

    if (username && password) {
      const klarna = new Klarna({ username, password });
      const order = await klarna.checkout.updateOrder('f5f35214-eba5-6093-b212-501c3d6038a8', dummyUpdateOrderObj);
      expect(order).toHaveProperty('statusCode', 200);
    } else {
      expect(username || password).toBeFalsy();
    }
  });

});