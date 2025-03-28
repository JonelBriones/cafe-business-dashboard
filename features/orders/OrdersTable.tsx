import React, { Fragment, useState } from "react";
import Order from "./Order";
import OrderStatusBadge from "./OrderStatusBadge";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const OrdersTable = () => {
  // const [orders, setOrders] = useState<OrderItem[]>(mockOrders);
  const orders = useSelector((state: RootState) => state.orders.value);

  const status = ["All", "Pending", "In Progress", "Completed", "Cancelled"];
  const [selectedStatus, setSelectedStatus] = useState("All");
  let ordersView =
    selectedStatus === "All"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);
  const TOTAL_ITEMS = (status: string) => {
    if (status == "All") return orders.length;
    return orders.filter((order: any) => order.status === status).length;
  };
  return (
    <div className="flex flex-col gap-4  pr-6 py-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 overflow-auto ">
        {ordersView.map((order: any) => (
          <Fragment key={order.id}>
            <Order order={order} orders={orders} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default OrdersTable;
