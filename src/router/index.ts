import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';
import { Preferences } from '@capacitor/preferences';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

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

async function getStoredToken() {
  try {
    const { value } = await Preferences.get({ key: '__persisted__auth' });
    return value;
  } catch (e) {
    console.error('Error retrieving persisted auth:', e);
    return undefined;
  }
}

async function performLogout() {
  const authStore = useAuthStore();
  await authStore.logout();
}

export default router;
