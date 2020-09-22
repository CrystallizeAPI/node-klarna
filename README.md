# node-klarna

[![Build Status](https://github.com/crystallizeApi/node-klarna/workflows/CI/badge.svg)](https://github.com/crystallizeApi/node-klarna/workflows/CI/badge.svg)

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

const { Klarna } = require('@crystallize/node-klarna');

const klarna = new Klarna({ username, password, apiEndpoint });

```

The library mimicks the Klarna API path making function calls more predictable. 


Example: 

api path: `/checkout/v3/orders/:order_id` [https://developers.klarna.com/api/#checkout-api-retrieve-an-order](https://developers.klarna.com/api/#checkout-api-retrieve-an-order)

will have a usage like 

```javascript

const order = await klarna.checkoutV3.retrieveOrder(orderId);

```

