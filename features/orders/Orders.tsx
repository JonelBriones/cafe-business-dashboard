"use client";
import React, { Fragment, useState } from "react";
import OrderStatusBadge from "./OrderStatusBadge";
import OrderQueue from "./OrderQueue";

const Orders = ({ orders }: any) => {
  const status = ["all", "pending", "preparing", "completed"];
  const [selectedStatus, setSelectedStatus] = useState("all");

  const TOTAL_ITEMS = (status: string) => {
    if (status == "all") return orders.length;
    return orders.filter((order: any) => order.status.toLowerCase() === status)
      .length;
  };

  return (
    <Fragment>
      <h4 className="text-lg font-medium">Order Line</h4>
      <div className="flex gap-2">
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
      <div className="flex gap-3">
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
