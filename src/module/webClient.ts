import axios from 'axios'
import { BASE_URI } from '@config/baseURI'
import { AndroidToast } from '@utils/android'

let _window: any

const isBrowser = process.browser && typeof window !== undefined

if (isBrowser) _window = window as any

const devToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN
const webClient = axios.create({
  baseURL: BASE_URI,
})

const getToken = () => {
  return _window?.Android?.getToken()
}

const refreshToken = (token: string) => {
  webClient.defaults.headers['Authorization'] = `Bearer ${token}`
}

isBrowser && refreshToken(devToken || getToken())

isBrowser &&
  webClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (
        !!getToken() &&
        error.response?.status === 401 &&
        !_window.location.pathname.includes('logout')
      ) {
        AndroidToast(
          `로그인 페이지로 이동합니다.\n${
            error.config.url
          } 토큰: ${getToken()}`,
        )
        _window.location.pathname = '/logout'
      }

      return Promise.reject(error)
    },
  )

export { webClient, refreshToken }
