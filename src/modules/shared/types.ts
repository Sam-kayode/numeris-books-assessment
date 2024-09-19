// type for route links
export interface Route {
  name: string;
  path: string | null;
  icon: string;
}

export interface NavItemProps {
  route: Route;
}

export interface NavItemsProps {
  routes: Route[];
}
