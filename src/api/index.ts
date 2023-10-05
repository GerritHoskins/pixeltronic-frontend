import axios from 'axios';
import { useAuthStore } from '../stores/auth';
const baseURL = import.meta.env.VITE_API_URL || '';
const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const token = authStore.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.setContentType('application/json');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
