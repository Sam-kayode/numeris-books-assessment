import { Button } from "@/modules/shared";
import NumerisCard from "@/modules/shared/components/cards/NumerisCard";
import "./sections.scss";
import { InvoiceListItems } from "../lists/RecentInvoiceItems";

const RecentInvoices = () => {
  return (
    <NumerisCard className="recent-card" variant="lg">
      <header className="mb-8">
        <h3>Recent Invoice</h3>
        <Button variant="outlined">VIEW ALL INVOICES</Button>
      </header>
      <InvoiceListItems />
    </NumerisCard>
  );
};

export default RecentInvoices;
