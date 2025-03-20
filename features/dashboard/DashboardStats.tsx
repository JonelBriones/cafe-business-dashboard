import DashboardWidget from "@/components/dashboard/widgets/DashboardWidget";
import React from "react";

const DashboardStats = () => {
  const dashboardStats = {
    totalSales: 320, // Total orders completed
    totalRevenue: 12500.75, // Total revenue in USD
    avgOrderValue: 39.06, // Average revenue per order
    pendingOrders: 12, // Orders yet to be fulfilled
    refundedOrders: 5, // Orders refunded
  };

  return (
    <div className="flex gap-4">
      <DashboardWidget
        text={"Total Sales"}
        text_value={`$${dashboardStats.totalSales}`}
      />
      <DashboardWidget
        text={"Total Revenue"}
        text_value={`$${dashboardStats.totalRevenue}`}
      />
      <DashboardWidget
        text={"Total Orders"}
        text_value={dashboardStats.avgOrderValue}
      />
      <DashboardWidget
        text={"Pending Orders"}
        text_value={dashboardStats.pendingOrders}
      />
      <DashboardWidget
        text={"Refunded Orders"}
        text_value={dashboardStats.refundedOrders}
      />
    </div>
  );
};

export default DashboardStats;
