// Dashboard.tsx
import { FC } from "react";
import { useIssuesQuery } from "~/server/issue/useIssuesQuery/useIssuesQuery";
import DashboardHeader from "./components/DashboardHeader";
import DashboardMapView from "./components/DashboardMapView";
import DashboardSidebar from "./components/DashboardSidebar/DashboardSidebar";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const { data } = useIssuesQuery();
  return (
    <>
      <DashboardHeader />
      <div className="bg-white flex full rounded-lg">
        <DashboardSidebar />
        <div className="flex-1 plg">
          {data?.data.length! > 0 && (
            <DashboardMapView issues={data?.data ?? []} />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
