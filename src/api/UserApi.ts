import { webClient } from 'src/module'

interface UpdateRequest {
  nickname?: string
  department?: string
  profile_image?: string | null
}

export const UserApi = {
  check: () => webClient.get(`/users/me`),
  delete: () => webClient.delete(`/users/me`),
  update: (data: UpdateRequest) => webClient.patch(`/users/me`, data),
}
