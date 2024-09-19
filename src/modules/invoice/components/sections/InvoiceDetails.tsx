import { Button } from "@/modules/shared";
import "./sections.scss";
import { getStatusColor } from "../../utils/stringUtils";
import NumerisDropdown from "@/modules/shared/components/forms/NumerisDropdown";
import CheckButtonGroup from "./CheckButtonGroup";
import InvoiceBreakDown from "./InvoiceBreakDown";

const InvoiceDetails = () => {
  const dropdownItems = [
    "DUPLICATE INVOICE",
    "GET SHARABLE LINK",
    "SEND INVOICE",
  ].map((label) => ({
    label,
    onClick: () => {
      console.log(`${label} clicked`);
    },
  }));

  return (
    <section className="invoice-information">
      <header>
        <div className="invoice-title">
          <h1 className="mb-1">Invoice - 1023494 - 2304 </h1>
          <p>View the details and activity of this invoice</p>
        </div>
        <div className="buttons">
          <Button variant="outlined" className="header-button mr-5">
            DOWNLOAD AS PDF
          </Button>
          <Button variant="primary" className="header-button send-invoice mr-5">
            SEND INVOICE
          </Button>
          <NumerisDropdown items={dropdownItems}>
            <Button variant="outlined" className="header-button !text-black">
              MORE
            </Button>
          </NumerisDropdown>
        </div>
      </header>
      <p
        className={`status-badge ${getStatusColor(
          "partial payment"
        )} py-3 mt-8 text-left ml-0`}
      >
        PARTIAL PAYMENT
      </p>

      <CheckButtonGroup />
      <div className="breakdown-container mt-9">
        <InvoiceBreakDown />
      </div>
    </section>
  );
};

export default InvoiceDetails;
