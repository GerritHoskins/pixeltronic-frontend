import { computed } from 'vue';
import { allNavigationRoutes } from '@/router';
import type { NavigationRouterLink } from '@/types/Navigation';

const useNavigationRoutes = () => {
  const navItemCache = new Map();

  const mapRouteToNavItem = (route: (typeof allNavigationRoutes)[0]) => {
    const cacheKey = route.path;
    if (navItemCache.has(cacheKey)) {
      return navItemCache.get(cacheKey);
    }

    const navItem: NavigationRouterLink = {
      name: route.name || route.children?.[0]?.name || '',
      label: route.meta?.title || route.name || '',
      contentTitle: route.meta?.contentTitle || '',
      exclude: route.meta?.exclude || false,
      isHeaderNavItem: route.meta?.headerNavigation || false,
      isFooterNavItem: route.meta?.footerNavigation || false,
      clickAction: route.meta?.clickAction || undefined,
    };

    navItemCache.set(cacheKey, navItem);
    return navItem;
  };

  const navItems = computed(() => {
    const headerItems: NavigationRouterLink[] = [];
    const footerItems: NavigationRouterLink[] = [];

    for (const route of allNavigationRoutes) {
      const item = mapRouteToNavItem(route);
      if (item.exclude) continue;
      if (item.isHeaderNavItem) headerItems.push(item);
      if (item.isFooterNavItem) footerItems.push(item);
    }

    // Reverse header items if needed
    return {
      header: headerItems.reverse(),
      footer: footerItems,
    };
  });

  return {
    navItems,
  };
};

export default useNavigationRoutes;
