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
  label: string;
  meta: {
    title: string;
    contentTitle: string;
    clickAction?: {
      action: () => Promise<void> | undefined;
    };
  };
}

export type { NavigationRouterLink, NavigationRoute };
