import { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from 'stores/auth';

const childRoutesWithAuthentication = [
  {
    path: '',
    name: 'blog',
    meta: {
      layout: 'AuthenticatedLayout',
      title: 'Blog',
      contentTitle: 'Interesting reads',
    },
    component: () => import('../pages/BlogPage.vue'),
  },
  {
    path: '/projects',
    meta: {
      layout: 'AuthenticatedLayout',
      title: 'Projects',
      contentTitle: "Things I've built",
    },
    component: () => import('../pages/ProjectPage.vue'),
    children: [
      {
        path: ':id',
        name: 'project',
        meta: { title: 'Project' },
        component: () => import('../components/project/ProjectDetail.vue'),
      },
      {
        path: 'add',
        name: 'add-project',
        meta: { title: 'Add Project' },
        component: () => import('../components/project/AddNewProject.vue'),
      },
      {
        path: '',
        name: 'projects',
        meta: { title: 'All Projects' },
        component: () => import('../components/project/ProjectList.vue'),
      },
    ],
  },
];

const childRoutesWithoutAuthentication = [
  {
    path: '',
    name: 'login',
    meta: {
      layout: 'DefaultLayout',
      title: 'Login',
      contentTitle: 'Logout',
    },
    component: () => import('../pages/LoginPage.vue'),
  },
];

const childRoutesNoRequirements = [
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    meta: {
      layout: 'AuthenticatedLayout',
      title: 'Privacy policy',
    },
    component: () => import('../pages/PrivacyPolicyPage.vue'),
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    meta: {
      layout: 'AuthenticatedLayout',
      title: 'Terms of use',
    },
    component: () => import('../pages/TermsOfUsePage.vue'),
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
    component: () => import('../layouts/DefaultLayout.vue'),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (!authStore.user.id) next({ name: 'login' });
      else next({ name: 'blog' });
    },
  },
  {
    path: '/blog',
    component: () => import('../layouts/AuthenticatedLayout.vue'),
    children: [...childRoutesWithAuthentication, ...childRoutesNoRequirements],
  },
  {
    path: '/login',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [...childRoutesWithoutAuthentication],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error404Page.vue'),
  },
];

export default routes;
