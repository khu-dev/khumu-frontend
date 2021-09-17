import { webClient } from 'src/module';

interface SignUpParams {
  username: string;
  password: string;
  nickname: string;
}

export const fetchSignUp = (data: SignUpParams) =>
  webClient.post('/users', {
    data,
  });
