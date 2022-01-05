import { Klarna } from '../src';

describe('initiate library', () => {
  it('library should have checkout property', async () => {
    const klarna = new Klarna({
      username: 'username',
      password: 'password',
    });

    expect(klarna).toHaveProperty('checkoutV3');
  });
});
