import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

import { accesskey } from '@config/_key';
// import { accesskey } from '@config/key';

export const fetchQRCode = (token: string = accesskey) =>
  axios.get(BASE_URI + '/users/me/qr-code', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
