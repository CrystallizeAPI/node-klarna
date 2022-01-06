# node-klarna

API Wrapper for Klarna with Crystallize helper functions

## Install

Add wrapper as dependency:

```shell
yarn add @crystallize/node-klarna

```

Or, if you prefer NPM:

```shell
npm install @crystallize/node-klarna
```

## Usage

### Klarna Library

Initialize the Klarna library:

```javascript
const {Klarna} = require('@crystallize/node-klarna')

const klarna = new Klarna({
    username: 'username provided by Klarna',
    password: 'password provided by Klarna',
    apiEndpoint: 'api.playground.klarna.com', // Optional, this value by default
    logs: { // Optional, logs disabled by default
        enabled: false,
        useNodeEnv: true, // Use NODE_ENV variable, logs enabled in non 'production' environment
    }
})
```

Create Klarna order using the library:

```javascript
const response = await klarna.checkoutV3.createOrder({
    // body structure follows Klarna API spec
})
```

The library has also built-in TypeScript support:

```typescript
import {OrderBody, OrderResponse} from '@crystallize/node-klarna'

const body: OrderBody = {
    // ...
}

const response: OrderResponse = await klarna.checkoutV3.createOrder(body)
```

### Crystallize Klarna helpers

Initialize Crystallize helpers:

```javascript
const {CrystallizeKlarnaHelpers} = require('@crystallize/node-klarna');

const crystallizeKlarnaHelpers = new CrystallizeKlarnaHelpers({
    host_uri: 'http://localhost:3000',
    purchase_country: 'NO',
    logs: { // Optional, logs disabled by default
        enabled: false,
        useNodeEnv: true, // Use NODE_ENV variable, logs enabled in non 'production' environment
    }
    // And other defaults
})
```

Generate Klarna order body from Crystallize order items:

```javascript
const klarnaOrderBody = crystallizeKlarnaHelpers.getOrderBody(crystallizeLineItems);
```



