import { Button } from "@/modules/shared";
import NumerisCard from "@/modules/shared/components/cards/NumerisCard";
import "./sections.scss";

const RecentActivities = () => {
  return (
    <NumerisCard className="recent-card" variant="lg">
      <header className="mb-8">
        <h3>Recent Activities</h3>
        <Button variant="outlined">VIEW ALL INVOICES</Button>
      </header>
      
    </NumerisCard>
  );
};

export default RecentActivities;
