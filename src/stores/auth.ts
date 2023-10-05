import { defineStore } from 'pinia';
import axiosInstance from '../api';

export type RegisterRequestParams = {
  username: string;
  password: string;
};

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    token: null,
    role: null,
  }),
  actions: {
    async register(data: RegisterRequestParams) {
      const response = await axiosInstance.post('auth/register', data);
      this.user = response.data.user;
      this.token = response.data.token;
      this.role = response.data.role;
    },
    async login(data: RegisterRequestParams) {
      const response = await axiosInstance.post('auth/login', data);
      this.user = response.data.user;
      this.token = response.data.token;
      this.role = response.data.role;
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
});
