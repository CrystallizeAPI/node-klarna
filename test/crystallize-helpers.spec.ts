import { CrystallizeKlarnaHelpers } from '../src';

describe('initiate crystallize klarna helpers library', () => {
  it('library should have getOrderBody property', async () => {
    const crystallizeKlarnaHelpers = new CrystallizeKlarnaHelpers({
      host_uri: 'http://localhost:3000',
    });

    expect(crystallizeKlarnaHelpers).toHaveProperty('getOrderBody');
  });
});
