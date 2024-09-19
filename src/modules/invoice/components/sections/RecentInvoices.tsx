import { Button } from "@/modules/shared";
import NumerisCard from "@/modules/shared/components/cards/NumerisCard";
import "./sections.scss";
import { invoiceData } from "../../index";
import { RecentInvoiceList } from "../lists/RecentInvoiceItems";

const RecentInvoices = () => {
  return (
    <NumerisCard className="recent-card recent-invoices" variant="lg">
      <header className="mb-8">
        <h3>Recent Invoice</h3>
        <Button variant="outlined" className="recent-invoices-btn">VIEW ALL INVOICES</Button>
      </header>
      <RecentInvoiceList invoices={invoiceData} />
    </NumerisCard>
  );
};

export default RecentInvoices;
