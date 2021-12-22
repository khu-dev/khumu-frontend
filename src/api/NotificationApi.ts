import { webClient } from 'src/module';

interface ReadParams {
  notiId: 'all' | number;
}

interface DeleteParams {
  notiId: number;
}

export const NotificationApi = {
  query: () => webClient.get(`/notifications?recipient=me`),
  read: ({ notiId }: ReadParams) => webClient.patch(`/notifications/${notiId}/read`),
  unread: ({ notiId }: ReadParams) =>
    webClient.patch(`/notifications/${notiId}/unread`),
  delete: ({ notiId }: DeleteParams) => webClient.delete(`/notifications/${notiId}`),
  options: () => webClient.get(`/push/options/jinsu`),
  update: ({ id, status }: { id: number; status: boolean }) =>
    webClient.patch(`/push/options/${id}`, {
      is_activated: status,
    }),
};
