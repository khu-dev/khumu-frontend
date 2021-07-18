import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

export const fetchSchedule = () => axios.get(`${BASE_URI}/haksa-schedules`);
