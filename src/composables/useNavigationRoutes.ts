import { computed } from 'vue';
import { allNavigationRoutes } from '@/router';
import type { NavigationRouterLink } from '@/types/Navigation';

const useNavigationRoutes = () => {
  const mapRouteToNavItem = (route: (typeof allNavigationRoutes)[0]): NavigationRouterLink => ({
    name: route.name || '',
    label: route.meta?.title || route.name || '',
    contentTitle: route.meta?.contentTitle || '',
    exclude: route.meta?.exclude || false,
    isHeaderNavItem: route.meta?.headerNavigation || false,
    isFooterNavItem: route.meta?.footerNavigation || false,
    clickAction: route.meta?.clickAction || undefined,
  });

  const exclude = (item: NavigationRouterLink) => !item.exclude;
  const isHeaderNavItem = (item: NavigationRouterLink) => item.isHeaderNavItem;
  const isFooterNavItem = (item: NavigationRouterLink) => item.isFooterNavItem;

  const navItems = computed(() => {
    const items: {
      header: NavigationRouterLink[];
      footer: NavigationRouterLink[];
    } = {
      header: [],
      footer: [],
    };

    const mappedItems = allNavigationRoutes.map(mapRouteToNavItem).filter(exclude);

    items.header = mappedItems.filter(isHeaderNavItem).reverse();
    items.footer = mappedItems.filter(isFooterNavItem);

    return items;
  });

  return {
    navItems,
  };
};

export default useNavigationRoutes;
