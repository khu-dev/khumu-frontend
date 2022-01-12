import {
  Notification,
  ReadRequest,
  UpdateRequest,
} from '@interface/Notification'
import { DataObj } from '@interface/Response'
import { caching } from '@module/cache'
import { webClient } from '@module/webClient'

export const NotificationApi = {
  query: (refresh?: boolean) => {
    const url = '/notifications?recipient=me'

    return caching<DataObj<Notification[]>>(
      url,
      () => webClient.get<DataObj<Notification[]>>(url),
      refresh,
    )
  },
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
