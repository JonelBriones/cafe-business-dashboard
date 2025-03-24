"use client";
import React, { Fragment } from "react";
import DashboardStats from "@/features/dashboard/DashboardStats";
import InventoryChart from "@/features/dashboard/InventoryChart";
import RecentOrders from "@/features/dashboard/RecentOrders";
import SalesChart from "@/features/dashboard/SalesChart";
import TopSellingItems from "@/features/dashboard/TopSellingItems";
import { mockOrders as orders } from "@/data/orders";

import { menuItems } from "@/data/menuItems";
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 py-4 h-full pr-4">
      <DashboardStats orders={orders} />
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 gap-4">
        <SalesChart />
        <InventoryChart menuItems={menuItems} />
        <TopSellingItems />
        <div>Recent Orders</div>
      </div>
    </div>
  );
};

export default Dashboard;
