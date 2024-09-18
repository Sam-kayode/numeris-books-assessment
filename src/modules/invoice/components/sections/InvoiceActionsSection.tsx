// import "../cards/cards.scss";
import { InvoiceCard, invoiceActionData, InvoiceActionData } from "../../index";

export const InvoiceActionsSection = () => {
  return (
    <div className="invoice-cards-container invoice-action-container  mt-9 ">
      {invoiceActionData.map(
        ({ icon, title, description }: InvoiceActionData, index: number) => (
          <InvoiceCard
            key={index}
            icon={icon}
            title={title}
            description={description}
            className={index == 0 ? "index-action" : ""}
            isActionCard
          />
        )
      )}
    </div>
  );
};
