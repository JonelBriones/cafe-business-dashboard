import DashboardStats from "@/features/dashboard/DashboardStats";
import InventoryChart from "@/features/dashboard/InventoryChart";
import RecentOrders from "@/features/dashboard/RecentOrders";
import SalesChart from "@/features/dashboard/SalesChart";
import TopSellingItems from "@/features/dashboard/TopSellingItems";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <div className="h-20 w-full">
        <span>Dashboard</span>
      </div>
      <div className="h-full flex flex-col gap-4">
        <div className="overflow-x-scroll scrollbar-hide">
          <DashboardStats />
        </div>
        <div className="flex gap-4 w-full  overflow-x-scroll scrollbar-hide">
          <SalesChart />
          <InventoryChart />
        </div>
        <div className="flex flex-col border flex-1 rounded-lg p-4">
          <TopSellingItems />
          <RecentOrders />
        </div>
      </div>
    </Fragment>
  );
};

export default page;
