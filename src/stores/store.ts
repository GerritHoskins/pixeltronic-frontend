import { defineStore } from 'pinia';
import { useUserStore } from '@/stores/user';
import { usePreferredDark } from '@vueuse/core';

const useStore = defineStore('store', {
  state: () => ({
    initialized: false,
    prefersDarkMode: usePreferredDark().value,
  }),

  actions: {
    async initialize() {
      const htmlRootEl = document.getElementsByTagName('html')[0];
      if (htmlRootEl && this.prefersDarkMode) htmlRootEl.classList.add('dark');

      const userStore = useUserStore();

      try {
        await userStore.syncUser();

        this.initialized = true;
      } catch (error) {
        console.error('Initialization failed: ', error);
      }
    },
  },
});

export default useStore;
