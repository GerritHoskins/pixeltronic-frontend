import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '../store/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => '/home',
    },
    {
      path: '/home',
      name: 'home',
      meta: { layout: 'CenteredLayout', title: 'Home' },
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();

        if (!authStore.user) next('/login');
        else next();
      },
    },
    {
      path: '/admin',
      name: 'admin',
      meta: { layout: 'CenteredLayout', title: 'Admin' },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: 'CenteredLayout', title: 'About' },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      meta: { layout: 'CenteredLayout', title: 'Projects' },
      component: () => import('../views/ProjectsView.vue'),
      children: [
        {
          path: ':id',
          name: 'project',
          meta: { layout: 'CenteredLayout', title: 'Project' },
          component: () => import('../components/project/ProjectDetail.vue'),
        },
        {
          path: 'add',
          name: 'add-project',
          meta: { layout: 'CenteredLayout', title: 'Add Project' },
          component: () => import('../components/project/AddNewProject.vue'),
        },
        {
          path: 'list',
          name: 'project-list',
          meta: { layout: 'CenteredLayout', title: 'All Projects' },
          component: () => import('../components/project/ProjectList.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'DefaultLayout', title: 'Login' },
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      meta: { layout: 'CenteredLayout', title: 'Privacy policy' },
      component: () => import('../views/PrivacyView.vue'),
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      meta: { layout: 'CenteredLayout', title: 'Terms of use' },
      component: () => import('../views/TermsOfUseView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to?.meta?.title) {
    document.title = to.meta.title as string;
    next();
  } else {
    next();
  }
});

export default router;
