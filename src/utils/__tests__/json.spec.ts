import { parseJSON } from '../json';

describe('json utils', () => {
  describe('parseJSON', () => {
    it('should return object for valid JSON string', () => {
      expect(parseJSON('{"test": [1, true, "hello", null]}')).toEqual({
        test: [1, true, 'hello', null],
      });
    });

    it('should return null for invalid JSON string', () => {
      expect(parseJSON('')).toEqual(null);
      expect(parseJSON('test')).toEqual(null);
    });
  });
});
