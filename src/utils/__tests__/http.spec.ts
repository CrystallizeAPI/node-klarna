import { getBasicAuthHeader } from '../http';

describe('http utils', () => {
  describe('getBasicAuthHeader', () => {
    it('should compose base64 basic auth header from username and password', () => {
      expect(
        getBasicAuthHeader({ username: 'admin', password: '123' })
      ).toEqual('Basic YWRtaW46MTIz');
    });
  });
});
