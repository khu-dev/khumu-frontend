import { webClient } from 'src/module';

interface TokenParams {
  username: string;
  password: string;
}

export const fetchToken = (data: TokenParams) =>
  webClient.post('/token', {
    ...data,
  });
