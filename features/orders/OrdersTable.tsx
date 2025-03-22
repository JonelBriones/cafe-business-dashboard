import React, { Fragment, useState } from "react";
import Order from "./Order";
import { mockOrders as mockOrders } from "@/data/orders";
import { OrderItem } from "./schemas/order";

const OrdersTable = () => {
  const [orders, setOrders] = useState<OrderItem[]>(mockOrders);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {orders.map((order: any) => (
        <Fragment key={order.id}>
          <Order order={order} setOrders={setOrders} orders={orders} />
        </Fragment>
      ))}
    </div>
  );
};

export default OrdersTable;
