import { FC } from "react";
import "./forms.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outlined" | "rounded";
  density?: "compact" | "default";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  variant = "plain", // Set default variant
  className = "", // Optional className
  density = "", // Set default density
  onClick,
  children,
}) => {
  return (
    <button
      className={`btn btn-${variant} ${density} ${className}`.trim()} // Use trim to clean up spaces
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
