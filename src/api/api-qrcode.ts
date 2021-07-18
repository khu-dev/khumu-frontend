import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

export const fetchQRCode = () => axios.get(BASE_URI + '/users/me/qr-code');
