import "./sections.scss";
import ActivityList from "../lists/RecentActivityList";
import { invoiceActivities } from "../../constants";
const InvoiceActivities = () => {
  return (
    <div>
      <header className="mt-8 md:mt-0 mb-8">
        <h3>Recent Activities</h3>
      </header>
      <ActivityList activities={invoiceActivities} isInvoiceActivity />
    </div>
  );
};

export default InvoiceActivities;
