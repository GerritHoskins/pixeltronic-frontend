import axios from 'axios';
import type { AxiosInstance } from 'axios';

const baseURL = import.meta.env.VITE_API_URL ?? '';

const axiosInstance: AxiosInstance = axios.create({ baseURL });

export default axiosInstance;
