import { CheckResponse, UpdateRequest } from '@interface/User'
import { webClient } from '@module/webClient'

export const UserApi = {
  check: () => webClient.get<CheckResponse>(`/users/me`),
  delete: () => webClient.delete(`/users/me`),
  update: (data: UpdateRequest) => webClient.patch(`/users/me`, data),
}
