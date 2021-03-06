const isDev =
  (process.browser && window.location.href.includes('dev')) ||
  process.env.NODE_ENV === 'development' ||
  process.env.MODE === 'dev'

export const BASE_URI = isDev
  ? 'https://api.dev.khumu.me/api'
  : 'https://api.khumu.me/api'

export const IMG_URI = isDev
  ? 'https://drive.dev.khumu.me/original'
  : 'https://drive.khumu.me/original'

export const IMG_THUMBNAIL_URI = 'https://drive.khumu.me/thumbnail'
