import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

export const fetchDepartments = {
  select: () => axios.get(`${BASE_URI}/departments`),
};
