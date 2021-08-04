import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

export const fetchUsers = {
  select: () => axios.get(`${BASE_URI}/users/me`),
};
