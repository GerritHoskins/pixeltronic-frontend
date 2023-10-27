import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { AuthRequestParams } from '@/types/User';
import { useAxios } from '@vueuse/integrations/useAxios';

const baseURL = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api` : '';

export const axiosInstance: AxiosInstance = axios.create({ baseURL });

export const setRequestInterceptor = (jwt: string) => {
  axiosInstance.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${jwt}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
};

export const strapiAuthRegister = async (userData: AuthRequestParams) => {
  return useAxios('https://pixeltronic.info/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      email: userData.email,
      password: userData.password,
    },
  });
};

export const strapiAuthLogin = async (userData: AuthRequestParams) => {
  return useAxios('https://pixeltronic.info/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      identifier: userData.email,
      password: userData.password,
    },
  });
};
