// Dashboard.tsx
import { FC } from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardMapView from "./components/DashboardMapView";
import DashboardSidebar from "./components/DashboardSidebar/DashboardSidebar";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <>
      <DashboardHeader />
      <div className="bg-white flex full rounded-lg">
        <DashboardSidebar />
        <div className="flex-1 plg">
          <DashboardMapView />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
