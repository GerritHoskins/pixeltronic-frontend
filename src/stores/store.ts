import { defineStore } from 'pinia';
import { useUserStore } from '@/stores/user';

const useStore = defineStore('store', {
  state: () => ({
    initialized: false,
  }),

  actions: {
    async initialize() {
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
