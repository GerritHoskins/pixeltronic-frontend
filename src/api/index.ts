import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL || '';
const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.setContentType('application/json');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
