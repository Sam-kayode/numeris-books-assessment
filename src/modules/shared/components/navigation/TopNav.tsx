import Avatar from "./Avatar";
import HamburgerMenu from "./Hamburger";
import "./navigation.scss";
import Notifications from "./Notifications";

const TopNav = () => {
  return (
    <div className="top-nav">
      <h2 className="route-title hidden md:inline-block">INVOICE</h2>
      <HamburgerMenu />

      <div className="centralize mt-3">
        <Notifications />
        <Avatar />
      </div>
    </div>
  );
};

export default TopNav;
