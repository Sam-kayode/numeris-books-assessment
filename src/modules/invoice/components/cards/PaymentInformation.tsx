import React from "react";
import "./cards.scss";

// Define the type for each payment information item
interface PaymentItem {
  label: string;
  value: string;
}

// Define the props type for the component
interface PaymentInformationProps {
  paymentData: PaymentItem[];
}

const PaymentInformation: React.FC<PaymentInformationProps> = ({
  paymentData,
}) => {
  return (
    <div className="payment-information mt-6">
      <h4 className="section-title">PAYMENT INFORMATION</h4>

      <div className="payment-grid mt-3">
        {paymentData.map((item, index) => (
          <div className="payment-item" key={index}>
            <span className="label">{item.label}</span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentInformation;
