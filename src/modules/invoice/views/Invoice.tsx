import Button from "../../shared/components/forms/Button";
import InvoiceCard from "../components/cards/InvoiceCard";
import "./invoice.scss";

const Invoice = () => {
  return (
    <div>
      <header className="spaced-centralise">
        <h2>Invoice</h2>

        <div className="centralise mt-10">
          <Button variant="outlined" className="mr-8">
            SEE WHAT'S NEW
          </Button>
          <Button variant="primary">CREATE</Button>
        </div>
      </header>

      <InvoiceCard />
    </div>
  );
};

export default Invoice;
