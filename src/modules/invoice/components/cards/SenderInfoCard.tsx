import "./sender-info-card.scss";

const SenderInfoCard = () => {
  return (
    <div className="invoice-header">
      <div className="sender-container">
        <h3>SENDER</h3>{" "}
        <div className="sender flex">
          <div className="logo mr-4">
            <img src="/assets/images/sender-logo.svg" alt="Logo" />
          </div>
          <div className="sender-details">
            <h4>Fabulous Enterprise</h4>
            <p>+386 989 271 3115</p>
            <p>1331 Hart Ridge Road 48436 Gaines, MI</p>
            <p>info@fabulousenterise.co</p>
          </div>
        </div>
      </div>
      <div className="customer">
        <h3>CUSTOMER</h3>
        <h4>Olaniyi Ojo Adewale</h4>
        <p>+386 989 271 3115</p>
        <p>info@fabulousenterise.co</p>
      </div>
      <div className="w-full mt-5">
        <h3>INVOICE DETAILS</h3>
        <div className="invoice-details">
          <div>
            <h5>INVOICE NO</h5>
            <p>1023902390</p>
          </div>
          <div>
            <h5>ISSUE DATE</h5>
            <p>March 30th, 2023</p>
          </div>
          <div>
            <h5>DUE DATE</h5>
            <p>May 19th, 2023</p>
          </div>
          <div>
            <h5>BILLING CURRENCY</h5>
            <p>USD ($)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenderInfoCard;
