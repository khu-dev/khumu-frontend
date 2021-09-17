import axios from 'axios';
import { accesskey } from '@config/_key';
import { BASE_URI } from '@config/baseURI';
import { AndroidToast } from '@utils/android';

const devToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || accesskey;
let _window;

if (process.browser) _window = window as any;

const token = _window?.Android?.getToken() || devToken;

const webClient = axios.create({
  baseURL: BASE_URI,
});

webClient.defaults.headers['Authorization'] = `Bearer ${token}`;

webClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && error.config?.url !== '/logout') {
      AndroidToast('로그인 페이지로 이동합니다');
      _window.location.href = '/logout';
    }

    return Promise.reject(error);
  },
);

export { webClient };
