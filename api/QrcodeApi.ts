import { QRcode } from '@interface/QRcode'
import { DataObj } from '@interface/Response'
import { webClient } from '@module/webClient'

export const QrcodeApi = {
  get: () => webClient.get<DataObj<QRcode>>('/users/me/qr-code'),
}
