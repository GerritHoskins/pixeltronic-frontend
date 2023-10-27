import { defineStore } from 'pinia';
import { Preferences } from '@capacitor/preferences';
import { axiosInstance, setRequestInterceptor } from '@/api/axiosInstance';

import { useCrypto } from '@/composables/useCrypto';
import type { User, UserDetails, AuthRequestParams } from '@/types/User';
import { supabase } from '@/main';

export const useUserStore = defineStore({
  id: 'user',

  state: (): User => ({
    user: {} as UserDetails,
    jwt: '',
  }),

  actions: {
    async syncUser() {
      try {
        const jwtData = await Preferences.get({ key: 'jwt' });

        if (jwtData.value) setRequestInterceptor(jwtData.value);

        if (jwtData.value) this.jwt = jwtData.value;
      } catch (error) {
        console.error('Error syncing user: ', error);
      }
    },

    async register(userData: AuthRequestParams) {
      try {
        const { error } = await supabase.auth.signUp({
          email: userData.email,
          password: userData.password,
        });
        if (error) throw error;
      } catch (error) {
        console.error('Error:', error);
      }
    },

    async login(userData: AuthRequestParams) {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email: userData.email,
          password: userData.password,
        });
        if (error) throw error;
      } catch (error) {
        console.error('Error:', error);
      }
      await this.persist();
    },

    async performAuth(endpoint: string, data?: AuthRequestParams) {
      try {
        return await axiosInstance.post(endpoint, data);
      } catch (e) {
        console.error(`Authentication error on ${endpoint}:`, e);
        throw e;
      }
    },

    updateStateFromResponse(response: Record<string, unknown>) {
      this.user = response.data?.user;
      this.jwt = response.data?.token;
    },

    async persist() {
      try {
        const { encrypt } = useCrypto();
        const encryptedData = encrypt(this.jwt);
        await Preferences.set({ key: 'jwt', value: encryptedData });
      } catch (e) {
        console.error('Error persisting authentication data:', e);
      }
    },

    async logout() {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        await Preferences.clear();
        this.user = {} as UserDetails;
        this.jwt = '';
      } catch (error) {
        console.error('Logout failed: ', error);
      }
    },
  },
});
