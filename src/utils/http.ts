export function getBasicAuthHeader(input: BasicAuthInput) {
  const { username, password } = input;
  return `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
}

export interface BasicAuthInput {
  username: string;
  password: string;
}
