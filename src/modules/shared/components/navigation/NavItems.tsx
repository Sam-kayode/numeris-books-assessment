import React from "react";
import { NavLink } from "react-router-dom";
import { NavItemsProps, NavItemProps } from "../../types";


const NavItem: React.FC<NavItemProps> = ({ route }) => {
  return (
    <NavLink
      to={route.path}
      className={({ isActive }) =>
        `nav-item centralize-y ${isActive ? "active" : ""}`
      }
      aria-label={`Navigate to ${route.name}`}
    >
      <img src={route.icon} alt={route.name} className="mr-2" />
      <p className="nav-text">{route.name}</p>
    </NavLink>
  );
};

const NavItems: React.FC<NavItemsProps> = ({ routes }) => {
  return (
    <div>
      {routes.map((route) => (
        <NavItem key={route.path} route={route} />
      ))}
    </div>
  );
};

export default NavItems;
