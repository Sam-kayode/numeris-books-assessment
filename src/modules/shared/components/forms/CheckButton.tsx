import { useState } from "react";
import "./forms.scss";

interface CheckButtonProps {
  text: string;
}

const CheckButton: React.FC<CheckButtonProps> = ({ text }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className={`check-button spaced-centralize ${
        isChecked ? "is-checked" : ""
      }`}
      style={{
        backgroundColor: isChecked ? "#E6FFF0" : "",
      }}
    >
      <input type="checkbox" hidden checked={isChecked} readOnly />
      {text}
      {
        <img
          src="/assets/icons/green-tick.svg"
          alt=""
          className={!isChecked ? " opacity-0" : "px-2"}
        />
      }
    </button>
  );
};

export default CheckButton;
