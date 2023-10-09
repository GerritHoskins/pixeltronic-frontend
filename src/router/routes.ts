import { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from 'stores/auth';

const childRoutesWithAuthentication = [
  {
    path: '/blog',
    name: 'blog',
    meta: { layout: 'AuthenticatedLayout', title: 'Blog' },
    component: () => import('../pages/BlogPage.vue'),
  },
  {
    path: '/projects',
    meta: { layout: 'AuthenticatedLayout', title: 'Projects' },
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
    path: '/login',
    name: 'login',
    meta: { layout: 'AuthenticatedLayout', title: 'Login' },
    component: () => import('../pages/LoginPage.vue'),
  },
];

const childRoutesNoRequirements = [
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    meta: { layout: 'DefaultLayout', title: 'Privacy policy' },
    component: () => import('../pages/PrivacyPolicyPage.vue'),
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    meta: { layout: 'DefaultLayout', title: 'Terms of use' },
    component: () => import('../pages/TermsOfUsePage.vue'),
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (!authStore.user) next('/login');
      else next('/blog');
    },
  },
  {
    path: '',
    component: () => import('../layouts/AuthenticatedLayout.vue'),
    children: [...childRoutesWithAuthentication, ...childRoutesNoRequirements],
  },
  {
    path: '',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      ...childRoutesWithoutAuthentication,
      ...childRoutesNoRequirements,
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFoundPage.vue'),
  },
];

export default routes;
