import { Route } from "./types";

// Define the routes array with the type Route[]
export const routes: Route[] = [
  {
    name: "Getting Started",
    path: "/getting-started",
    icon: "/assets/icons/home.svg",
  },
  {
    name: "Overview",
    path: "/overview",
    icon: "/public/assets/icons/two-tone.svg",
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: "/assets/icons/home.svg",
  },
  {
    name: "Invoice",
    path: "/invoice",
    icon: "/public/assets/icons/invoice.svg",
  },
  {
    name: "Beneficiary Management",
    path: "/beneficiary-management",
    icon: "/public/assets/icons/personnel.svg",
  },
  {
    name: "Help Center",
    path: "/help-center",
    icon: "/public/assets/icons/help.svg",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "/public/assets/icons/settings.svg",
  },
];
