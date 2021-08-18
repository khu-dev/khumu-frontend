import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

export const fetchClubs = {
  select: () => axios.get(`${BASE_URI}/clubs`),
  categories: () => axios.get(`${BASE_URI}/club-categories`),
};
