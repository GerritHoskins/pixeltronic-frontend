import { defineStore } from 'pinia';
import { Preferences } from '@capacitor/preferences';
import { axiosInstance } from '@/api/axiosInstance';

import { initialProjectState } from '@/stores/project';
import { useCrypto } from '@/composables/useCrypto';
import type { AxiosResponse } from 'axios';

interface User {
  id: null | string;
  email: null | string;
  token: null | string;
  role: null | string;
}

interface Auth {
  user: User;
  token: string;
}

interface RequestParams {
  email: string;
  password: string;
}

const initialAuthState = (): Auth => ({
  user: {} as User,
  token: '',
});

export const useAuthStore = defineStore({
  id: 'auth',
  state: initialAuthState,
  actions: {
    async register(data: RequestParams) {
      const response = await this.performAuth('/auth/register', data);
      this.updateStateFromResponse(response);
      await this.persist();
    },

    async login(data: RequestParams) {
      const response = await this.performAuth('/auth/login', data);
      this.updateStateFromResponse(response);
      await this.persist();
    },

    async performAuth(endpoint: string, data: RequestParams) {
      try {
        return await axiosInstance.post(endpoint, data);
      } catch (e) {
        console.error(`Authentication error on ${endpoint}:`, e);
        throw e;
      }
    },

    updateStateFromResponse(response: AxiosResponse) {
      this.user = response.data.user;
      this.token = response.data.token;
    },

    async persist() {
      try {
        const { encrypt } = useCrypto();
        const encryptedData = encrypt(this.token);
        await Preferences.set({ key: '__persisted__auth', value: encryptedData });
      } catch (e) {
        console.error('Error persisting authentication data:', e);
      }
    },

    async logout() {
      Object.assign(this, initialAuthState());
      initialProjectState();
      await Preferences.remove({ key: '__persisted__auth' });
      await axiosInstance.post('/auth/logout');
    },
  },
});
