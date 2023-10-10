import { defineStore } from 'pinia';
import { api } from 'boot/axios';

export type RequestParams = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {
      id: null,
      email: null,
      token: null,
      role: null,
    },
  }),
  actions: {
    async register(data: RequestParams) {
      const response = await api.post('auth/register', data);
      this.user = response.data.user;
    },
    async login(data: RequestParams) {
      const response = await api.post('auth/login', data);
      this.user = response.data.user;
    },
    logout() {
      this.user = {
        id: null,
        email: null,
        token: null,
        role: null,
      };
    },
  },
});
