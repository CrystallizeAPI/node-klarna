import { OptionalLogConfig } from './utils';

export { OptionalLogConfig } from './utils';

export interface Config {
  username: string;
  password: string;
  apiEndpoint?: string;
  logs?: OptionalLogConfig;
}
