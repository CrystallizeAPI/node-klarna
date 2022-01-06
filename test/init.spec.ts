import { Config, Klarna } from '../src';

describe('initiate library', () => {
  it('library should have checkout property', async () => {
    const klarna = new Klarna({
      username: 'username',
      password: 'password',
    });

    expect(klarna).toHaveProperty('checkoutV3');
  });

  it('should throw error if username or password is missing', () => {
    expect(() => new Klarna({ username: '123' } as Config)).toThrow();
    expect(() => new Klarna({ password: '123' } as Config)).toThrow();

    expect(
      () => new Klarna({ username: '123', password: '' } as Config)
    ).toThrow();
    expect(
      () => new Klarna({ password: '123', username: '' } as Config)
    ).toThrow();
  });
});
