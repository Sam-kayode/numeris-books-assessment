import React, { useState, useRef } from "react";

interface DropdownItem {
  label: string;
  onClick: () => void;
}

interface DropdownProps {
  items: DropdownItem[];
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ items, children }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

  const toggleRef = useRef<HTMLDivElement | null>(null);

  const handleToggleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (onClick: () => void) => {
    onClick(); // Call the specific item's click handler

    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="dropdown">
      <div
        ref={toggleRef}
        onClick={handleToggleClick}
        className="dropdown-toggle"
      >
        {children}
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="dropdown-item"
                onClick={() => handleItemClick(item.onClick)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
