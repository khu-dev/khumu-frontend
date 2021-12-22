import { webClient } from 'src/module';

interface updateRequest {
  nickname?: string;
  department?: string;
  profile_image?: string;
}

export const UserApi = {
  check: () => webClient.get(`/users/me`),
  delete: () => webClient.delete(`/users/me`),
  update: (data: updateRequest) => webClient.patch(`/users/me`, data),
};
