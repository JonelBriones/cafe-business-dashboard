import DashboardCards from "@/components/dashboard/cards/DashboardCards";
import React from "react";

const SalesChart = () => {
  return (
    <div className="h-80 min-w-180 flex-1 border rounded-lg p-4">
      <div className="flex justify-between">
        <span>Sales Analytics</span>
        <span>date</span>
      </div>
      <div className="flex-1">graph</div>
    </div>
  );
};

export default SalesChart;
