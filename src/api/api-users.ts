import { webClient } from 'src/module';

interface PatchParams {
  nickname?: string;
  department?: string;
  profile_image?: string;
}

export const fetchUsers = {
  select: () => webClient.get(`/users/me`),
  delete: () => webClient.delete(`/users/me`),
  patch: (data: PatchParams) => webClient.patch(`/users/me`, data),
};
