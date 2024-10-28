import { Token } from '@utils';
import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'https://10.react.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  // FIXME: config :AxiosRequestConfig
  // eslint-disable-next-line
  api.interceptors.request.use((config: any) => {
    const token = Token.get();

    if (token) {
      // eslint-disable-next-line
      config.headers['x-token'] = token;
    }

    // eslint-disable-next-line
    return config;
  });

  return api;
};
