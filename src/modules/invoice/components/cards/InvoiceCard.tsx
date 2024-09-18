import { inoviceBadgeColor } from "../../utils/stringUtils";
import NumerisCard from "@/modules/shared/components/cards/NumerisCard";
import NumberFormat from "../amount-formatter/NumberFormat";
import "./cards.scss";

interface InvoiceCardProps {
  title: string;
  badgeCount?: number;
  amount?: string;
  badgeColor?: string;
  icon?: string;
  isActionCard?: boolean;
  description?: string;
  className?: string;
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({
  title,
  badgeCount,
  amount,
  icon,
  isActionCard = false,
  description,
  className = "",
}) => {
  return (
    <NumerisCard
      className={`invoice-card ${isActionCard ? "is-action" : ""} ${className}`}
    >
      <div className="top-icons">
        <img src={icon} alt="icon" className="icon" />
      </div>

      {/* Card Title and Badge */}
      <p className="card-title d-flex my-2 md:my-4">
        {title}

        {badgeCount && (
          <span
            className={`badge ml-1`}
            style={{ backgroundColor: `${inoviceBadgeColor(title)}` }}
          >
            {badgeCount?.toString().padStart(2, "0")}
          </span>
        )}
      </p>

      {/* Amount */}
      {amount && <NumberFormat amount={amount}></NumberFormat>}

      {/* descriptiom */}
      {description && <p className="card-description">{description}</p>}
    </NumerisCard>
  );
};
