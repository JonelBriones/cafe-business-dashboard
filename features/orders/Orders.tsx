"use client";
import React, { Fragment, useState } from "react";
import OrderStatusBadge from "./OrderStatusBadge";
import OrderQueue from "./OrderQueue";

import { OrderItem } from "./schemas/order";

const Orders = ({ ordersData }: { ordersData: OrderItem[] }) => {
  const status = ["All", "Pending", "In Progress", "Completed", "Cancelled"];
  const [selectedStatus, setSelectedStatus] = useState("All");
  let orders =
    selectedStatus === "All"
      ? ordersData
      : ordersData.filter((order) => order.status === selectedStatus);
  const TOTAL_ITEMS = (status: string) => {
    if (status == "All") return orders.length;
    return orders.filter((order: any) => order.status === status).length;
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
      <div className="flex gap-3 overflow-auto w-208 h-30">
        {orders.length === 0 ? (
          <div className="flex place-items-center">No orders created</div>
        ) : (
          orders.map((order: any, idx) => (
            <Fragment key={idx}>
              <OrderQueue order={order} />
            </Fragment>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Orders;
