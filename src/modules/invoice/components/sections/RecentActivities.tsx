import { Button } from "@/modules/shared";
import NumerisCard from "@/modules/shared/components/cards/NumerisCard";
import "./sections.scss";
import ActivityList from "../lists/RecentActivityList";
import { recentActivities } from "../../constants";

const RecentActivities = () => {
  return (
    <NumerisCard className="recent-card recent-activities" variant="lg">
      <header className="mb-8">
        <h3>Recent Activities</h3>
        <Button variant="outlined" className="recent-activity-btn">VIEW ALL</Button>
      </header>
      <ActivityList activities={recentActivities} />
    </NumerisCard>
  );
};

export default RecentActivities;
