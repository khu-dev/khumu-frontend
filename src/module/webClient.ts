import axios from 'axios';
import { BASE_URI } from '@config/baseURI';
import { AndroidToast } from '@utils/android';

let _window;

if (process.browser && typeof window !== undefined) _window = window as any;

const devToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
const webClient = axios.create({
  baseURL: BASE_URI,
});

const getToken = () => {
  return _window?.Android?.getToken();
};

const refreshToken = (token: string) => {
  webClient.defaults.headers['Authorization'] = `Bearer ${token}`;
};

devToken && refreshToken(devToken);

webClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    token && refreshToken(token);

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

webClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response?.status === 401 &&
      !_window.location.href.includes('logout')
    ) {
      AndroidToast('로그인 페이지로 이동합니다');
      _window.location.href = '/logout';
    }

    return Promise.reject(error);
  },
);

export { webClient };
