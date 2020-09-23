# node-klarna

[![Build Status](https://github.com/crystallizeApi/node-klarna/workflows/CI/badge.svg)](https://github.com/crystallizeApi/node-klarna/workflows/CI/badge.svg)
[![Dependency Status](https://david-dm.org/crystallizeApi/node-klarna.svg)](https://david-dm.org/crystallizeApi/node-klarna)

API Wrapper for Klarna with Crystallize helper functions

## Install

```shell
$ npm install @crystallize/node-klarna

# Or, if you prefer yarn
$ yarn add @crystallize/node-klarna
```

## Usage 

Initialize the Klarna library

```javascript 

const { Klarna, CrystallizeKlarnaHelpers } = require('@crystallize/node-klarna');

const klarna = new Klarna({ username, password, apiEndpoint });
const crystallizeKlarnaHelpers = new CrystallizeKlarnaHelpers({
  host_uri: 'http://localhost:3000',
  purchase_country: 'NO',
  // And other defaults
})

const orderBody = crystallizeKlarnaHelpers.getOrderBody(crystallizeLineItems); // Returns Klarna compatible order body

const order = klarna.checkoutV3.createOrder(orderBody);

```

The library mimicks the Klarna API path, making module usability more predictable. 


Example: 

api path: `/checkout/v3/orders/:order_id` [https://developers.klarna.com/api/#checkout-api-retrieve-an-order](https://developers.klarna.com/api/#checkout-api-retrieve-an-order)

is usable like

```javascript

const order = await klarna.checkoutV3.retrieveOrder(orderId);

```

