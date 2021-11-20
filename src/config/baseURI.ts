const isDev = process.env.MODE === 'dev';

export const BASE_URI = isDev
  ? 'https://api.dev.khumu.me/api'
  : 'https://api.khumu.me/api';

export const IMG_URI = isDev
  ? 'https://drive.dev.khumu.me/original'
  : 'https://drive.khumu.me/original';

console.log('--------', process.env.MODE, BASE_URI, '--------');

export const IMG_THUMBNAIL_URI = 'https://drive.khumu.me/thumbnail';
