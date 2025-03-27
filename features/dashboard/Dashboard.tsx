"use client";
import React, { Fragment } from "react";
import DashboardStats from "@/features/dashboard/DashboardStats";
import InventoryChart from "@/features/dashboard/InventoryChart";
import SalesChart from "@/features/dashboard/SalesChart";
import TopSellingItems from "@/features/dashboard/TopSellingItems";
import { menuItems } from "@/data/menuItems";
import OrderQueue from "../orders/OrderQueue";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
const Dashboard = () => {
  const orders = useSelector((state: RootState) => state.orders.value);
  console.log(typeof orders);
  console.log(orders);
  const recentOrders = orders.toReversed().slice(0, 6);
  return (
    <div className="flex flex-col gap-4 py-4 h-full pr-4">
      <DashboardStats orders={orders} />
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 gap-4">
        <SalesChart />
        <InventoryChart menuItems={menuItems} />
        <TopSellingItems orders={orders} />
        <div className="flex flex-col gap-4 p-2 h-100 overflow-auto">
          <h4 className="font-semibold">Recent orders</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-2 xl:h-100 overflow-auto 2xl:grid-cols-3 gap-4 place-items-center">
            {recentOrders.map((order: any) => (
              <Fragment key={order.id}>
                <OrderQueue order={order} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
