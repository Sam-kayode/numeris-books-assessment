import "./list.scss";
import { invoiceData, Invoice, getStatusColor } from "../../index";

interface InvoiceListProps {
  invoices: {
    [key: string]: Invoice[];
  };
}

// The main component that takes the invoices data as a prop
const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
  return (
    <div className="invoice-list-container">
      {Object.keys(invoices).map((date) => (
        <div key={date} className="invoice-section">
          <h3 className="invoice-date">{date.toUpperCase()}</h3>

          {invoices[date].map((invoice, index) => (
            <div key={index} className="invoice-card">
              <div className="invoice-info">
                <p className="invoice-number">
                  Invoice - {invoice.invoiceNumber}
                </p>
              </div>

              <div>
                <p className="due-date">DUE DATE</p>
                <p className="invoice-due">{invoice.dueDate}</p>
              </div>

              <div className="invoice-details">
                <p className="invoice-amount">{invoice.amount}</p>
                <p className={`status-badge ${getStatusColor(invoice.status)}`}>
                  {invoice.status.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Main app rendering the component
export const InvoiceListItems: React.FC = () => (
  <>
    <InvoiceList invoices={invoiceData} />
  </>
);
