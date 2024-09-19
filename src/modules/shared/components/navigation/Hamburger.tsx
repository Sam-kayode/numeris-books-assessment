import React, { useState } from "react";
import "./navigation.scss";
import SideBar from "./SideNav";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <>
      <div className="hamburger-container md:hidden">
        {/* Hamburger Menu */}
        <label
          htmlFor="check"
          className={`hamburger ${isOpen ? "open" : ""}`}
          
        >
          <input type="checkbox" id="check" onChange={toggleMenu} checked={isOpen} />
          <span></span>
          <span></span>
          <span></span>
        </label>
        {/* Full-Screen Overlay */}
        {isOpen && <div className="overlay p-6"><SideBar onClick={toggleMenu} /></div>}
      </div>
    </>
  );
};

export default HamburgerMenu;
