import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

interface SignUpParams {
  username: string;
  password: string;
  nickname: string;
}

export const fetchSignUp = (data: SignUpParams) =>
  axios.post(BASE_URI + '/users', {
    data,
  });
