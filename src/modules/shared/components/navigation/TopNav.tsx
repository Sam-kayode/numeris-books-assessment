import Avatar from "./Avatar";
import "./navigation.scss";
import Notifications from "./Notifications";

const TopNav = () => {
  return (
    <div className="top-nav">
      <h2 className="route-title">INVOICE</h2>

      <div className="centralize mt-3">
        <Notifications/>
       <Avatar/>
      </div>
    </div>
  );
};

export default TopNav;
