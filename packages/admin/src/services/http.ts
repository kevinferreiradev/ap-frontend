import axios, { AxiosRequestConfig } from 'axios';

import { API_URL, ACCESS_TOKEN } from './constants';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config): Promise<AxiosRequestConfig> => {
    if (
      config.url &&
      !config.url.includes('signin') &&
      !config.url.includes('refresh') &&
      !config.url.includes('signup')
    ) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        ACCESS_TOKEN,
      )}`;
    }
    return config;
  },
  async (error): Promise<AxiosRequestConfig> => {
    if (error.status !== 401 && error.status !== 403) {
      return Promise.reject(error);
    }

    error.response.config.headers.Authorization = `Bearer ${localStorage.getItem(
      ACCESS_TOKEN,
    )}`;

    return axios(error.response.config);
  },
);

export { axiosInstance };
