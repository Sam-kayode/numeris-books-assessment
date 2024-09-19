import { FC } from "react";
import TopNav from "../components/navigation/TopNav";
import "./dashboardLayout.scss";
import SideBar from "../components/navigation/SideNav";

interface DashbboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: FC<DashbboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="left-portion">
        <SideBar />
      </div>

      <div className="right-portion">
        <TopNav />
        {children}
      </div>
    </div>
  );
};
