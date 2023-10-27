import { computed } from 'vue';
import type { NavigationRouterLink } from '@/types/Navigation';
import { allNavigationRoutes } from '@/router';

const useNavigationRoutes = () => {
  const navItems = computed((): Array<NavigationRouterLink> => {
    if (!Array.isArray(allNavigationRoutes)) return [];

    return allNavigationRoutes.map(route => {
      return {
        name: route.name || '',
        label: route.meta?.title || route.name || '',
        isFooterNavItem: route.meta?.footerNavigation || false,
        isHeaderNavItem: route.meta?.headerNavigation || false,
        action: route.meta?.action || undefined,
      };
    });
  });

  return {
    navItems,
  };
};

export default useNavigationRoutes;
