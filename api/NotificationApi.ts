import {
  Notification,
  ReadRequest,
  UpdateRequest,
} from '@interface/Notification'
import { DataObj } from '@interface/Response'
import { webClient } from '@module/webClient'

export const NotificationApi = {
  query: () =>
    webClient.get<DataObj<Notification[]>>(`/notifications?recipient=me`),
  read: (notiId: ReadRequest) =>
    webClient.patch(`/notifications/${notiId}/read`),
  unread: (notiId: ReadRequest) =>
    webClient.patch(`/notifications/${notiId}/unread`),
  delete: (notiId: number) => webClient.delete(`/notifications/${notiId}`),
  options: () => webClient.get(`/push/options/jinsu`),
  update: ({ id, status }: UpdateRequest) =>
    webClient.patch(`/push/options/${id}`, {
      is_activated: status,
    }),
}
