import React from "react";

import EventHistory from "./Table";
import TransactionChart from "./TransactionChart";
import DashboardStatsGrid from "./DashboardStatsGrid";

// Dashboard component that serves as the main layout container
// Organizes and arranges various dashboard elements in a structured layout
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <EventHistory />
      </div>
    </div>
  );
};

export default Dashboard;
