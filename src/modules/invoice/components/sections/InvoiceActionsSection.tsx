import "./sections.scss";
import { InvoiceCard, invoiceActionData, InvoiceActionData } from "../../index";

export const InvoiceActionsSection = () => {
  return (
    <section>
      <header className="invoice-action-header mt-7 mb-5">
        <h3 className="pr-5">Invoice Actions</h3>
        <hr />
      </header>

      <div className="invoice-cards-container invoice-action-container">
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
    </section>
  );
};
