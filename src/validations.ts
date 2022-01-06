import { Config } from './interface';

export function validateConfig(config: Config): Error | null {
  const { username, password } = config;
  if (!username || username === '') {
    return new Error('`username` is mandatory');
  }

  if (!password || password === '') {
    return new Error('`password` is mandatory');
  }

  return null;
}
