import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import useStore from '@/stores/store';
import { Preferences } from '@capacitor/preferences';
import Error404Page from '@/pages/Error404Page.vue';
import { useUserStore } from '@/stores/user';

// Default meta configuration
const defaultMeta = {
  headerNavigation: false,
  footerNavigation: false,
};

// Common meta generator
const generateMeta = (layout: string, title: string, options = {}) => ({
  ...defaultMeta,
  layout,
  title,
  ...options,
});

const isAuthenticated = async () => !!(await Preferences.get({ key: 'jwt' })).value;

const navigationRoutes = [
  {
    path: '/',
    redirect: '/blog',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/LoginPage.vue'),
    meta: generateMeta('DefaultLayout', 'Login', {
      contentTitle: 'Back already?',
      requiresUnauth: true,
      headerNavigation: true,
    }),
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/pages/LoginPage.vue'),
    meta: generateMeta('DefaultLayout', 'Logout', {
      contentTitle: 'Logout',
      requiresUnauth: true,
      headerNavigation: true,
    }),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/pages/BlogPage.vue'),
    meta: generateMeta('AuthenticatedLayout', 'Blog', {
      contentTitle: 'Interesting reads',
      requiresAuth: true,
      headerNavigation: true,
    }),
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/pages/ProjectPage.vue'),
    meta: generateMeta('AuthenticatedLayout', 'Projects', {
      contentTitle: 'Stuff I built',
      requiresAuth: true,
      headerNavigation: true,
    }),
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('@/pages/PrivacyPolicyPage.vue'),
    meta: generateMeta('AuthenticatedLayout', 'Privacy Policy', {
      requiresAuth: false,
      footerNavigation: true,
    }),
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    component: () => import('@/pages/TermsOfUsePage.vue'),
    meta: generateMeta('AuthenticatedLayout', 'Terms of Use', {
      requiresAuth: false,
      footerNavigation: true,
    }),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Error404Page },
];
export const allNavigationRoutes = navigationRoutes;

const router = createRouter({
  history: createWebHistory('/'),
  routes: navigationRoutes as Array<RouteRecordRaw>,
});

router.beforeEach(async (to, from, next) => {
  const store = useStore();

  if (!store.initialized) {
    try {
      await store.initialize();
    } catch (error) {
      console.error('Initialization failed:', error);
      next('/error');
      return;
    }
  }
  const authenticated = await isAuthenticated();
  if (to.path === '/logout' && isAuthenticated) {
    const userStore = useUserStore();
    userStore.logout();
    next('/login');
    return;
  } else if (to.path !== '/login' && !isAuthenticated) {
    next('/login');
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !authenticated) {
    next('/login');
  } else if (to.matched.some(record => record.meta.requiresUnauth) && authenticated) {
    next('/blog');
  } else {
    next();
  }
});

export default router;
