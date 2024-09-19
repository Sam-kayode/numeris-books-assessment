import { invoiceItems, paymentData } from "../../constants";
import NoteBox from "../cards/Note";
import PaymentInformation from "../cards/PaymentInformation";
import SenderInfoCard from "../cards/SenderInfoCard";
import InvoiceTable from "../tables/InvoiceTable";

const InvoiceBreakDown = () => {
  return (
    <div className="invoice-breakdown">
      <SenderInfoCard />
      <header className="invoice-action-header my-5">
        <h3 className="pr-5">Items</h3>
        <hr />
      </header>
      <InvoiceTable items={invoiceItems} />
      <PaymentInformation paymentData={paymentData} />
      <NoteBox note="Thank you for your patronage" />
    </div>
  );
};

export default InvoiceBreakDown;
