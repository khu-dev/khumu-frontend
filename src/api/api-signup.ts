import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

interface QRCodeParams {
  username: string;
  password: string;
  nickname: string;
}

export const fetchQRCode = (data: QRCodeParams) =>
  axios.get(BASE_URI + '/users', {
    data,
  });
