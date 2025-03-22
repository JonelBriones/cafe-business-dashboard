import React from "react";
import { itemOrder, OrderItem } from "./schemas/order";

const OrderQueue = ({ order }: { order: OrderItem }) => {
  const { id, items, total, customerName, status, paymentMethod, createdAt } =
    order;
  console.log(order);
  const convertTimestamp = new Date(new Date(createdAt).getTime()).getMinutes();
  const STATUS_COLOR_BG_CONTAINER = () => {
    if (status == "Completed") return "bg-green-200";
    if (status == "In Progress") return "bg-orange-200";
    if (status == "Pending") return "bg-purple-200";
    if (status == "Cancelled") return "bg-red-200";
  };
  const STATUS_COLOR__BG = () => {
    if (status == "Completed") return "bg-green-700";
    if (status == "In Progress") return "bg-orange-700";
    if (status == "Pending") return "bg-purple-700";
    if (status == "Cancelled") return "bg-red-700";
  };

  return (
    <div
      className={`${STATUS_COLOR_BG_CONTAINER()} p-3 min-w-50 w-fit rounded-lg transition-colors duration-200 ease-in-out `}
    >
      <div className="flex justify-between">
        <span>Order #{id}</span>
        <span>{customerName}</span>
      </div>
      <span>
        Item: {items.reduce((a: number, b: itemOrder) => a + b.quantity, 0)}
      </span>
      <div className="flex justify-between">
        <span>2 {convertTimestamp} ago</span>
        <span
          className={`${STATUS_COLOR__BG()} text-white text-xs py-1 rounded-full px-3`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default OrderQueue;
