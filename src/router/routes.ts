import type { RouteRecordRaw } from 'vue-router';
import type { NavigationRouterLink } from '@/router/definitions';

// Dynamic Imports
const BlogPage = () => import('../pages/BlogPage.vue');
const ProjectPage = () => import('../pages/ProjectPage.vue');
const LoginPage = () => import('../pages/LoginPage.vue');
const PrivacyPolicyPage = () => import('../pages/PrivacyPolicyPage.vue');
const TermsOfUsePage = () => import('../pages/TermsOfUsePage.vue');
const AuthenticatedLayout = () => import('../layouts/AuthenticatedLayout.vue');
const DefaultLayout = () => import('../layouts/DefaultLayout.vue');
const Error404Page = () => import('../pages/Error404Page.vue');

// Common meta generator
const generateMeta = (layout: string, title: string, options = {}) => ({
  layout,
  title,
  ...options,
});

const childRoutesWithAuthentication = [
  {
    path: '',
    name: 'blog',
    meta: generateMeta('AuthenticatedLayout', 'Blog', {
      floatingMenu: true,
      contentTitle: 'Interesting reads',
    }),
    component: BlogPage,
  },
  {
    path: '/projects',
    name: 'projects',
    meta: generateMeta('AuthenticatedLayout', 'Projects', {
      floatingMenu: true,
      contentTitle: "Things I've built",
    }),
    component: ProjectPage,
  },
];

const childRoutesWithoutAuthentication = [
  {
    path: '',
    name: 'logout',
    meta: generateMeta('DefaultLayout', 'Logout', {
      floatingMenu: true,
      contentTitle: 'Logout',
    }),
    component: LoginPage,
  },
];

const childRoutesNoRequirements = [
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    meta: generateMeta('AuthenticatedLayout', 'Privacy policy', {
      footerMenu: true,
    }),
    component: PrivacyPolicyPage,
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    meta: generateMeta('AuthenticatedLayout', 'Terms of use', {
      footerMenu: true,
    }),
    component: TermsOfUsePage,
  },
];

export const allNavigationRoutes = [
  ...childRoutesWithAuthentication,
  ...childRoutesWithoutAuthentication,
  ...childRoutesNoRequirements,
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/blog',
  },
  {
    path: '/blog',
    component: AuthenticatedLayout,
    children: [...childRoutesWithAuthentication, ...childRoutesNoRequirements],
  },
  {
    path: '/login',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'login',
        meta: generateMeta('DefaultLayout', 'Login', {
          contentTitle: 'Login',
        }),
        component: LoginPage,
      },
    ],
  },
  {
    path: '/logout',
    component: DefaultLayout,
    children: childRoutesWithoutAuthentication,
  },
  {
    path: '/:catchAll(.)',
    component: Error404Page,
  },
];

export default routes;
