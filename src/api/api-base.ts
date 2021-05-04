import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

export const apiBase = () => axios.get(BASE_URI);
