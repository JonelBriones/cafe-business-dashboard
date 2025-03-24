"use client";
import React, { Fragment, useState } from "react";
import OrderStatusBadge from "./OrderStatusBadge";
import OrderQueue from "./OrderQueue";
import { mockOrders as mockOrders } from "@/data/orders";
import { OrderItem } from "./schemas/order";

const Orders = () => {
  const status = ["All", "Pending", "In Progress", "Completed", "Cancelled"];
  const [selectedStatus, setSelectedStatus] = useState("All");
  let orders =
    selectedStatus === "All"
      ? mockOrders
      : mockOrders.filter((order) => order.status === selectedStatus);
  const TOTAL_ITEMS = (status: string) => {
    if (status == "All") return mockOrders.length;
    return mockOrders.filter((order: any) => order.status === status).length;
  };
  console.log(orders);
  return (
    <Fragment>
      <h4 className="text-lg font-medium">Order Line</h4>
      <div className="flex gap-2 w-208">
        {status.map((status) => (
          <Fragment key={status}>
            <OrderStatusBadge
              text={status}
              selectedStatus={selectedStatus}
              total={TOTAL_ITEMS(status)}
              setSelectedStatus={setSelectedStatus}
            />
          </Fragment>
        ))}
      </div>
      <div className="flex gap-3 overflow-auto w-208 pb-4">
        {orders.map((order: any) => (
          <Fragment key={order.id}>
            <OrderQueue order={order} />
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default Orders;
