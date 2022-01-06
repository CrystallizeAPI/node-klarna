import { HttpRequest } from '../src/http-request';
import nock from 'nock';
import { optionalLoggerFactory } from '../src/utils';

describe('HttpRequest', () => {
  const httpRequest = new HttpRequest({
    authorization: 'none',
    apiEndpoint: 'example.com',
    logger: optionalLoggerFactory({ enabled: false }),
  });

  describe('invoke', () => {
    it('should not reject promise when there is an error about wrong hostname', async () => {
      const originalError = new Error('Test');
      nock('https://example.com')
        .get('/test')
        .replyWithError(originalError);

      // Test should not throw error
      const { statusCode, error, response } = await httpRequest.invoke(
        'GET',
        '/test'
      );
      expect(statusCode).toEqual(500);
      expect(error).toEqual(originalError);
      expect(response).toEqual(undefined);
    });

    it('should not parse non JSON response', async () => {
      nock('https://example.com')
        .get('/test')
        .reply(200, 'hello');

      // Test should not throw error
      const { statusCode, error, response } = await httpRequest.invoke(
        'GET',
        '/test'
      );
      expect(statusCode).toEqual(200);
      expect(error).toEqual(undefined);
      expect(response).toEqual('hello');
    });

    it('should return not successful response as error', async () => {
      nock('https://example.com')
        .get('/test')
        .reply(404, { notFound: true });

      // Test should not throw error
      const { statusCode, error, response } = await httpRequest.invoke(
        'GET',
        '/test'
      );
      expect(statusCode).toEqual(404);
      expect(error).toEqual({ notFound: true });
      expect(response).toEqual(undefined);
    });
  });
});
