import React from "react";
import "./tables.scss";

// Define the interface for the invoice item
interface InvoiceItem {
  title: string;
  description?: string;
  quantity: number;
  unitPrice: string;
  totalPrice: string;
}

// Define the props interface for the InvoiceTable component
interface InvoiceTableProps {
  items: InvoiceItem[];
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({ items }) => {
  return (
    <>
      {" "}
      <table className="invoice-table">
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                {item.title}
                {item.description && <p>{item.description}</p>}
              </td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="invoice-summary">
        <div className="invoice-item">
          <span className="label">SUBTOTAL</span>
          <span className="value">$6,697,200.00</span>
        </div>
        <div className="invoice-item">
          <span className="label">DISCOUNT (2.5%)</span>
          <span className="value">$167,430.00</span>
        </div>
        <div className="invoice-item total">
          <span className="label2">TOTAL AMOUNT DUE</span>
          <span className="value2">$6,529,770.00</span>
        </div>
      </div>
    </>
  );
};

export default InvoiceTable;
