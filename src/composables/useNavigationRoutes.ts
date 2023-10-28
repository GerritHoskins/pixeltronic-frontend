import { computed } from 'vue';
import { allNavigationRoutes } from '@/router';

const useNavigationRoutes = () => {
  const navItems = computed(() => {
    const items = {
      header: [],
      footer: [],
    };

    allNavigationRoutes
      .filter(route => {
        if (route.meta?.headerNavigation) {
          return items.header.push(route);
        }
        if (route.meta?.footerNavigation) {
          return items.footer.push(route);
        }
      })
      .map(route => {
        return {
          name: route.name || '',
          label: route.meta?.title || route.name || '',
          clickAction: route.meta?.clickAction?.action
            ? {
                action: route.meta?.clickAction?.action || undefined,
              }
            : undefined,
        };
      });

    items.header.reverse();
    return items;
  });

  return {
    navItems,
  };
};

export default useNavigationRoutes;
