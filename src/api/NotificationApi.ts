import { webClient } from 'src/module'

interface ReadRequest {
  notiId: 'all' | number
}

interface DeleteRequest {
  notiId: number
}

export const NotificationApi = {
  query: () => webClient.get(`/notifications?recipient=me`),
  read: ({ notiId }: ReadRequest) =>
    webClient.patch(`/notifications/${notiId}/read`),
  unread: ({ notiId }: ReadRequest) =>
    webClient.patch(`/notifications/${notiId}/unread`),
  delete: ({ notiId }: DeleteRequest) =>
    webClient.delete(`/notifications/${notiId}`),
  options: () => webClient.get(`/push/options/jinsu`),
  update: ({ id, status }: { id: number; status: boolean }) =>
    webClient.patch(`/push/options/${id}`, {
      is_activated: status,
    }),
}
