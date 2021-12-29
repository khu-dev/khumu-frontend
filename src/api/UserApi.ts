import { CheckResponse, UpdateRequest } from '@src/interface'
import { webClient } from '@src/module'

export const UserApi = {
  check: () => webClient.get<CheckResponse>(`/users/me`),
  delete: () => webClient.delete(`/users/me`),
  update: (data: UpdateRequest) => webClient.patch(`/users/me`, data),
}
