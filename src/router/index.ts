import type { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import useStore from '@/stores/store';
import { Preferences } from '@capacitor/preferences';
import Error404Page from '@/pages/Error404Page.vue';
import { useUserStore } from '@/stores/user';

const defaultMeta = {
  requiresUnauth: false,
  requiresAuth: false,
  exclude: false,
  headerNavigation: false,
  footerNavigation: false,
  contentTitle: '',
  clickAction: undefined,
};

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
    component: () => import('@/pages/LoginRegisterPage.vue'),
    meta: generateMeta('DefaultLayout', 'Login', {
      contentTitle: 'Back already?',
      requiresUnauth: true,
      headerNavigation: false,
    }),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/LoginRegisterPage.vue'),
    meta: generateMeta('DefaultLayout', 'Register', {
      contentTitle: 'What is one more password?',
      requiresUnauth: true,
      headerNavigation: false,
    }),
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/pages/LoginRegisterPage.vue'),
    meta: generateMeta('DefaultLayout', 'Logout', {
      contentTitle: 'Logout',
      requiresUnauth: false,
      headerNavigation: true,
    }),
    beforeEnter: async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      const store = useUserStore();
      await store.logout();

      try {
        await store.logoutSupabase();
        next('/login');
      } catch (e) {
        console.error('Error logging out supabase:', e);
        next('/login');
      }
    },
  },
  {
    path: '/blog',
    component: () => import('@/pages/BlogPage.vue'),
    meta: generateMeta('AuthenticatedLayout', 'Blog', {
      contentTitle: 'Interesting reads',
      requiresAuth: true,
      headerNavigation: true,
    }),
    children: [
      {
        path: '',
        name: 'blog',
        component: () => import('@/components/blog/BlogEntries.vue'),
      },
      {
        path: ':id',
        name: 'entry',
        component: () => import('@/components/blog/BlogEntry.vue'),
      },
    ],
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/pages/ProjectPage.vue'),
    meta: generateMeta('AuthenticatedLayout', 'Projects', {
      exclude: true,

      contentTitle: 'My little creations',
      requiresAuth: true,
      headerNavigation: true,
    }),
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import('@/pages/TagsPage.vue'),
    meta: generateMeta('AuthenticatedLayout', 'Tags', {
      contentTitle: 'Find more to a given topic',
      requiresAuth: true,
      headerNavigation: true,
    }),
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('@/pages/PrivacyPolicyPage.vue'),
    meta: generateMeta('AuthenticatedLayout', 'Privacy Policy', {
      exclude: true,

      contentTitle: 'Privacy Policy',
      requiresAuth: false,
      footerNavigation: true,
    }),
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    component: () => import('@/pages/TermsOfUsePage.vue'),
    meta: generateMeta('AuthenticatedLayout', 'Terms of Use', {
      exclude: true,

      contentTitle: 'Terms of Use',
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
  if (to.matched.some(record => record.meta.requiresAuth) && !authenticated) {
    next('/login');
  } else if (to.matched.some(record => record.meta.requiresUnauth) && authenticated) {
    next('/blog');
  } else {
    next();
  }
});

export default router;
