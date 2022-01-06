import { CrystallizeKlarnaHelpers, CrystallizeLineItem } from '../src';

describe('initiate crystallize klarna helpers library', () => {
  const crystallizeKlarnaHelpers = new CrystallizeKlarnaHelpers({
    host_uri: 'http://localhost:3000',
  });

  it('library should have getOrderBody property', async () => {
    expect(crystallizeKlarnaHelpers).toHaveProperty('getOrderBody');
  });

  describe('isSubscription', () => {
    it('should return true if there is subscription item', () => {
      expect(
        crystallizeKlarnaHelpers.isSubscription([
          { isSubscriptionOnly: true } as CrystallizeLineItem,
        ])
      ).toEqual(true);
      expect(
        crystallizeKlarnaHelpers.isSubscription([
          { subscriptionPlans: [{ id: '1' }] } as CrystallizeLineItem,
        ])
      ).toEqual(true);
    });
    it('should return false if there is no subscription item', () => {
      expect(
        crystallizeKlarnaHelpers.isSubscription([
          { isSubscriptionOnly: false } as CrystallizeLineItem,
        ])
      ).toEqual(false);
      expect(
        crystallizeKlarnaHelpers.isSubscription([{} as CrystallizeLineItem])
      ).toEqual(false);
      expect(crystallizeKlarnaHelpers.isSubscription([])).toEqual(false);
    });
  });
});
