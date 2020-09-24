import * as https from 'https';
import * as http from 'http';

export interface IOptions {
  authorization: string;
  apiEndpoint: string;
}

export interface IResponse {
  statusCode: number;
  error?: Error;
  response?: any;
}

export class HttpRequest {
  authorization: string;
  hostname: string;

  constructor(options: IOptions) {
    this.authorization = options.authorization;
    this.hostname = options.apiEndpoint;
  }

  invoke(
    httpMethod: string,
    path: string,
    requestBody = {}
  ): Promise<IResponse> {
    return new Promise((resolve, reject) => {
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
            console.warn(
              '\x1b[41m',
              '⚠️ important: api response headers do not contain klarna correlation id',
              '\x1b[0m'
            );
          }

          if (res.statusCode) {
            if (res.statusCode < 200 || res.statusCode >= 300) {
              reject({ statusCode: res.statusCode, error: apiResponse });
            } else {
              resolve({
                statusCode: res.statusCode,
                response: apiResponse !== '' && JSON.parse(apiResponse),
              });
            }
          }
        });
      });

      if (requestBody) {
        req.write(JSON.stringify(requestBody));
      }

      req.on('error', function(error): void {
        console.error('Klarna request errored: ' + error.message);
        reject({ statusCode: 500, error });
      });

      req.end();
    });
  }
}
