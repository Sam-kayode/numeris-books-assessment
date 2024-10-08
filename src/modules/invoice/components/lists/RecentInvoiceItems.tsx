import "./list.scss";
import { Invoice, getStatusColor } from "../../index";
import NumerisModal from "@/modules/shared/components/modals/NumerisModal";
import { useState } from "react";
import InvoiceDetails from "../sections/InvoiceDetails";
interface InvoiceListProps {
  invoices: {
    [key: string]: Invoice[];
  };
}

// The main component that takes the invoices data as a prop
export const RecentInvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <div className="invoice-list-container">
        {Object.keys(invoices).map((date) => (
          <div key={date} className="invoice-section">
            <h3 className="invoice-date">{date.toUpperCase()}</h3>

            {invoices[date].map((invoice, index) => (
              <div key={index} className="invoice-card" onClick={toggleModal}>
                <div className="invoice-info">
                  <p className="invoice-number">
                    Invoice - {invoice.invoiceNumber}
                  </p>
                </div>

                <div className="invoice-timestamp">
                  <p className="due-date">DUE DATE</p>
                  <p className="invoice-due">{invoice.dueDate}</p>
                </div>

                <div className="invoice-details">
                  <p className="invoice-amount">{invoice.amount}</p>
                  <p
                    className={`status-badge ${getStatusColor(invoice.status)}`}
                  >
                    {invoice.status.toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <NumerisModal isVisible={isModalVisible} onClose={toggleModal}>
        <InvoiceDetails/>
      </NumerisModal>
    </>
  );
};
