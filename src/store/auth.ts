import { defineStore } from 'pinia';
import axiosInstance from '../api';

export type RegisterRequestParams = {
  username: string;
  password: string;
};
export type LoginRequestParams = {
  username: string;
  password: string;
};

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {
      id: null,
      username: null,
      token: null,
      role: null,
    },
  }),
  actions: {
    async register(data: RegisterRequestParams) {
      const response = await axiosInstance.post('auth/register', data);
      this.user = response.data.user;
    },
    async login(data: LoginRequestParams) {
      const response = await axiosInstance.post('auth/login', data);
      this.user = response.data.user;
    },
    logout() {
      this.user = {
        id: null,
        username: null,
        token: null,
        role: null,
      };
    },
  },
});
