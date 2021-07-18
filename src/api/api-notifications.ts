import { BASE_URI } from '@config/baseURI';
import axios from 'axios';

interface ReadParams {
  notiId: 'all' | number;
}

interface DeleteParams {
  notiId: number;
}

export const fetchNotifications = {
  select: () => axios.get(`${BASE_URI}/notifications?recipient=me`),
  read: ({ notiId }: ReadParams) =>
    axios.patch(`${BASE_URI}/notifications/${notiId}/read`),
  unread: ({ notiId }: ReadParams) =>
    axios.patch(`${BASE_URI}/notifications/${notiId}/unread`),
  delete: ({ notiId }: DeleteParams) =>
    axios.delete(`${BASE_URI}/notifications/${notiId}`),
};
