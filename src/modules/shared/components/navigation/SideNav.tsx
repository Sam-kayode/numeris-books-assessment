import { routes } from "../../constants";
import NavItems from "./NavItems";

interface SideBarProps{
  onClick?: () => void;
}

const SideBar:React.FC<SideBarProps> = ({onClick}) => {
  return (
    <div className="side-bar pt-5">
      <img src="/public/assets/images/logo.svg" alt="" className="hidden md:inline-block"/>

      <nav className="mt-8" onClick={onClick}>
        <NavItems routes={routes}/>
      </nav>
    </div>
  );
};

export default SideBar;
