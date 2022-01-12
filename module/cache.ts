import { AxiosResponse } from 'axios'

const cached: { [key: string]: any } = {}

function saveCache(data: AxiosResponse<any>) {
  const url = data.config.url

  if (url) {
    cached[url] = data
  }

  return data
}

async function caching<T>(
  url: string,
  api: () => Promise<AxiosResponse<T>>,
  refresh?: boolean,
) {
  const cachedData = cached[url]

  if (!cachedData || refresh) return api()

  return new Promise<AxiosResponse<T>>((resolve) => {
    resolve(cachedData)
  })
}

export { saveCache, caching }
