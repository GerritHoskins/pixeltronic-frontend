import { computed } from 'vue';
import type { NavigationRouterLink } from '@/router/definitions';
import { allNavigationRoutes } from '@/router/routes';

const useNavigationRoutes = () => {
  const navItems = computed((): Array<NavigationRouterLink> => {
    if (!Array.isArray(allNavigationRoutes)) return [];

    return (
      allNavigationRoutes
        //.filter(route => route.meta?.footerMenu)
        .map(route => {
          return {
            name: route.name || '',
            label: route.meta.title || route.name || '',
          };
        })
    );
  });

  return {
    navItems,
  };
};

export default useNavigationRoutes;
