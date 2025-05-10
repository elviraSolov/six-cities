import { Token } from '@utils';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const BACKEND_URL = 'https://10.react.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = Token.get();

    if (config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
