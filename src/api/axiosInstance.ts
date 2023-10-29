import axios from 'axios';
import type { AxiosInstance } from 'axios';

const baseURL = import.meta.env.VITE_API_URL ?? '';

const axiosInstance: AxiosInstance = axios.create({ baseURL });
/*
axiosInstance.interceptors.request.use(
  async config => {
    // const jwtData = await Preferences.get({ key: 'jwt' });
    const jwtData = JSON.parse(localStorage.getItem('sb-nmecdalnaljvyjttgfjc-auth-token'));
    if (!jwtData.access_token) {
      throw new Error('No JWT found');
    }
    const jwt = jwtData.access_token;
    config.headers.Authorization = `Bearer ${jwt}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);*/

export default axiosInstance;
