import { webClient } from '@module/webClient'

export const QrcodeApi = {
  get: () => webClient.get('/users/me/qr-code'),
}
