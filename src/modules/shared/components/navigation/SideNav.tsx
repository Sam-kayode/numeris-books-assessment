import { routes } from "../../constants";
import NavItems from "./NavItems";

const SideBar = () => {
  return (
    <div className="side-bar pt-5">
      <img src="/public/assets/images/logo.svg" alt="" />

      <nav className="mt-8">
        <NavItems routes={routes} />
      </nav>
    </div>
  );
};

export default SideBar;
