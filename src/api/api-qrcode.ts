import { webClient } from 'src/module';

export const fetchQRCode = {
  select: () => webClient.get('/users/me/qr-code'),
};
