import axios from 'axios';
import type { AxiosInstance } from 'axios';
const baseURL = `${import.meta.env.VITE_API_URL}` || '';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}
export const axiosInstance = axios.create({ baseURL: baseURL });
