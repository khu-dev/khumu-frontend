import axios from 'axios';
import { accesskey } from '@config/_key';
import { BASE_URI } from '@config/baseURI';
import { AndroidToast } from '@utils/android';

const devToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || accesskey;
let _window;
let token;
let webClient = axios.create({
  baseURL: BASE_URI,
});

if (process.browser && typeof window !== undefined) {
  _window = window as any;

  token = _window?.Android?.getToken() || devToken;

  webClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      console.log(error);

      if (error.response?.status === 401 && error.config?.url !== '/logout') {
        AndroidToast('로그인 페이지로 이동합니다');
        _window.location.href = '/logout';
      }

      return Promise.reject(error);
    },
  );
}
webClient.defaults.headers['Authorization'] = `Bearer ${token}`;

export { webClient };
