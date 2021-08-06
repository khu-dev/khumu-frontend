import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

interface PatchParams {
  nickname?: string;
  department?: string;
  profile_image?: string;
}

export const fetchUsers = {
  select: () => axios.get(`${BASE_URI}/users/me`),
  patch: (data: PatchParams) => axios.patch(`${BASE_URI}/users/jinsu`, data),
};
