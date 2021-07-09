import { BASE_URI } from '@config/baseURI';
import axios from 'axios';

interface SelectParams {
  userId: string;
}

interface ReadParams {
  id: 'all' | number;
}

interface DeleteParams {
  id: number;
}

export const API_NOTIFICATIONS_SELECT = ({ userId }: SelectParams) =>
  axios.get(`${BASE_URI}/notifications?recipient=${userId}`);

export const API_NOTIFICATIONS_READ = ({ id }: ReadParams) =>
  axios.patch(`${BASE_URI}/notifications/${id}/read`);

export const API_NOTIFICATIONS_UNREAD = ({ id }: ReadParams) =>
  axios.patch(`${BASE_URI}/notifications/${id}/unread`);

export const API_NOTIFICATIONS_DELETE = ({ id }: DeleteParams) =>
  axios.delete(`${BASE_URI}/notifications/${id}`);
