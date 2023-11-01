interface NavigationRouterLink {
  name: string;
  label: string;
  contentTitle?: string;
  exclude?: boolean;
  isFooterNavItem?: boolean;
  isHeaderNavItem?: boolean;
  clickAction?: ClickAction;
}

export type ClickAction = {
  action?: () => Promise<void>;
};

export type { NavigationRouterLink };
