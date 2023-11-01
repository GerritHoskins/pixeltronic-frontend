import { defineStore } from 'pinia';
import { useUserStore } from '@/stores/user';
import { usePreferredDark } from '@vueuse/core';
import useBlogStore from '@/stores/blog';

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
      const blogStore = useBlogStore();

      try {
        await userStore.syncUser();
        await blogStore.initialize();

        this.initialized = true;
      } catch (error) {
        console.error('Initialization failed: ', error);
      }
    },
  },
});

export default useStore;
