import { boot } from 'quasar/wrappers';
import { useAuthStore } from 'stores/auth';
import { LocalStorage } from 'quasar';

export default boot(({ router }) => {
  router.beforeEach(async (to, from, next) => {
    const token = getStoredToken();

    if (to.name === 'logout') {
      await performLogout();
      return next();
    }

    if (!token && to.name !== 'login') {
      return next({ name: 'login' });
    }

    next();
  });

  function getStoredToken() {
    try {
      return LocalStorage.getItem('__persisted__auth');
    } catch (e) {
      console.error('Error retrieving persisted auth:', e);
      return undefined;
    }
  }

  async function performLogout() {
    const authStore = useAuthStore();
    await authStore.logout();
  }
});
