import { Button } from "../../shared";
import RecentInvoices from "../components/sections/RecentInvoices";
import { InvoiceActionsSection, InvoiceCardsSection } from "../index";
import "./invoice.scss";

const Invoice = () => {
  return (
    <div>
      <header className="spaced-centralize mt-10">
        <h2>Invoice</h2>

        <div className="flex mt-6 md:mt-0">
          <Button variant="outlined" className="mr-8 header-button">
            SEE WHAT'S NEW
          </Button>
          <Button variant="primary" className="header-button">
            CREATE
          </Button>
        </div>
      </header>

      <InvoiceCardsSection />
      <InvoiceActionsSection />
      <section className="recent-section mt-7">
        <RecentInvoices />
      </section>
    </div>
  );
};

export default Invoice;
