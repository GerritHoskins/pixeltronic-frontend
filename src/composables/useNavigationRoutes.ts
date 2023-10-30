import { computed } from 'vue';
import { allNavigationRoutes } from '@/router';
import type { NavigationRouterLink } from '@/types/Navigation';

const useNavigationRoutes = () => {
  const navItems = computed(() => {
    const items = {
      header: [] as NavigationRouterLink[],
      footer: [] as NavigationRouterLink[],
    };

    allNavigationRoutes
      .map(
        route =>
          ({
            name: route.name || '',
            label: route.meta?.title || route.name || '',
            contentTitle: route.meta?.contentTitle || '',
            isHeaderNavItem: route.meta?.headerNavigation || false,
            isFooterNavItem: route.meta?.footerNavigation || false,
            clickAction: route.meta?.clickAction || undefined,
          }) as NavigationRouterLink
      )
      .filter(route => {
        if (route.isHeaderNavItem) {
          return items.header.push(route);
        }
        if (route.isFooterNavItem) {
          return items.footer.push(route);
        }
      });

    items.header.reverse();
    return items;
  });

  return {
    navItems,
  };
};

export default useNavigationRoutes;
