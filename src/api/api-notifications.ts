import { BASE_URI } from '@config/baseURI';
import axios from 'axios';

interface SelectParams {
  userId: string;
}

interface ReadParams {
  docId: 'all' | number;
}

interface DeleteParams {
  docId: number;
}

export const fetchNotifications = {
  select: ({ userId }: SelectParams) =>
    axios.get(`${BASE_URI}/notifications?recipient=${userId}`),
  read: ({ docId }: ReadParams) =>
    axios.patch(`${BASE_URI}/notifications/${docId}/read`),
  unread: ({ docId }: ReadParams) =>
    axios.patch(`${BASE_URI}/notifications/${docId}/unread`),
  delete: ({ docId }: DeleteParams) =>
    axios.delete(`${BASE_URI}/notifications/${docId}`),
};
