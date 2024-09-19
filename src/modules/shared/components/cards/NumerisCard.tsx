import { FC } from "react";
import "./card.scss";

interface NumerisCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "lg";
}

const NumerisCard: FC<NumerisCardProps> = ({ children, className = "",variant }) => {
  return <div className={`numeris-card ${className} ${variant}`}>{children}</div>;
};

export default NumerisCard;
