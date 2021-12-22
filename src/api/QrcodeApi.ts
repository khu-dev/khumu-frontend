import { webClient } from 'src/module'

export const QrcodeApi = {
  get: () => webClient.get('/users/me/qr-code'),
}
