interface NavigationRouterLink {
  name: string;
  label: string;
  contentTitle?: string;
  isFooterNavItem?: boolean;
  isHeaderNavItem?: boolean;
  clickAction?: ClickAction;
}

interface NavigationRoute {
  name: string;
  path: string;
  meta: {
    title: string;
    contentTitle: string;
    footerNavigation: boolean;
    headerNavigation: boolean;
    clickAction?: ClickAction;
  };
}

export type ClickAction = {
  action?: () => Promise<void>;
};

export type { NavigationRouterLink, NavigationRoute };
