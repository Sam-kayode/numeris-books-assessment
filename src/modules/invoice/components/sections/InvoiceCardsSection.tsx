// import "../cards/cards.scss";
import { invoiceSummaryData, InvoiceCard, SummaryData } from "../../index";

export const InvoiceCardsSection = () => {
  return (
    <div className="invoice-cards-container mt-9 pb-3">
      {invoiceSummaryData.map(
        ({ title, badgeCount, amount }: SummaryData, index: number) => (
          <InvoiceCard
            key={index}
            title={title}
            badgeCount={badgeCount}
            amount={amount}
            icon={"/assets/icons/two-tone.svg"}
          />
        )
      )}
    </div>
  );
};
