import * as https from 'https';
import * as http from 'http';
import { Logger, parseJSON } from './utils';

export interface Options {
  authorization: string;
  apiEndpoint: string;
  logger: Logger;
}

export interface Response {
  statusCode: number;
  error?: string | Error | any;
  response?: string | any;
}

export class HttpRequest {
  protected readonly authorization: string;
  protected readonly hostname: string;
  protected readonly logger: Logger;

  constructor(options: Options) {
    this.authorization = options.authorization;
    this.hostname = options.apiEndpoint;
    this.logger = options.logger;
  }

  invoke(
    httpMethod: string,
    path: string,
    requestBody = {}
  ): Promise<Response> {
    const logger = this.logger;

    return new Promise(resolve => {
      const options: http.RequestOptions = {
        method: httpMethod,
        hostname: this.hostname,
        path,
        headers: {
          'content-type': 'application/json',
          authorization: this.authorization,
        },
      };

      const req: http.ClientRequest = https.request(options, function(res) {
        const chunks: Array<Buffer> = [];

        res.on('data', function(chunk): void {
          chunks.push(chunk);
        });

        res.on('end', function() {
          const apiResponse: string = Buffer.concat(chunks).toString();

          // Check if the response is really from Klarna?
          if (!res?.headers?.['klarna-correlation-id']) {
            logger.warn(
              '\x1b[41m',
              '⚠️ important: api response headers do not contain klarna correlation id',
              '\x1b[0m'
            );
          }

          if (!res.statusCode) {
            return;
          }

          const parsedJSON = parseJSON(apiResponse);
          const response = parsedJSON ? parsedJSON : apiResponse;

          if (res.statusCode < 200 || res.statusCode >= 300) {
            return resolve({
              statusCode: res.statusCode,
              error: response,
            });
          }

          resolve({
            statusCode: res.statusCode,
            response: response,
          });
        });
      });

      if (requestBody) {
        req.write(JSON.stringify(requestBody));
      }

      req.on('error', function(error): void {
        logger.error('Klarna request errored: ' + error.message);
        resolve({ statusCode: 500, error });
      });

      req.end();
    });
  }
}
