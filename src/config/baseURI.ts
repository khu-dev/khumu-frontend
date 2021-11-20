// const isDev = process.env.MODE === 'dev';

// export const BASE_URI = isDev
//   ? 'https://api.dev.khumu.me/api'
//   : 'https://api.khumu.me/api';

// export const IMG_URI = isDev
//   ? 'https://drive.dev.khumu.me/original'
//   : 'https://drive.khumu.me/original';

export const BASE_URI = process.env.NEXT_PUBLIC_API_URL;
export const IMG_URI = process.env.NEXT_PUBLIC_CABINET_URL;

console.log('--------', process.env.MODE, BASE_URI, '--------');

export const IMG_THUMBNAIL_URI = 'https://drive.khumu.me/thumbnail';
