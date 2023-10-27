interface NavigationRouterLink {
  label: string;
  name: string;
  isFooterNavItem: boolean;
  isHeaderNavItem: boolean;
  action?: () => void;
}

interface NavigationRoute {
  name: string;
  path: string;
  meta: {
    layout: string;
    title: string;
    headerNavigation: boolean;
    contentTitle?: string;
    footerNavigation?: boolean;
    requiresUnauth?: boolean;
    requiresAuth?: boolean;
  };

  component: () => Promise<unknown>;
}

export type { NavigationRouterLink, NavigationRoute };
