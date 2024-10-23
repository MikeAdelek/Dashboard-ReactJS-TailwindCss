import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionChart from "./TransactionChart";
import ImageCarousel from "./ImageCarousel";
import EventHistory from "./Table";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        {/* <ImageCarousel /> */}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <EventHistory />
      </div>
    </div>
  );
};

export default Dashboard;
