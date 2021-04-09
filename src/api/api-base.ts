import axios from 'axios';
import { BASE_URI } from '@config/base.uri';

export const apiBase = () => axios.get(BASE_URI);
