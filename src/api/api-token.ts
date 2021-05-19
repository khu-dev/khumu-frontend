import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

interface TokenParams {
  username: string;
  password: string;
}

export const fetchToken = (data: TokenParams) =>
  axios.get(BASE_URI + '/token', {
    data,
  });
