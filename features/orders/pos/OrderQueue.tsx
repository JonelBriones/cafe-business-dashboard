import React, { Fragment } from "react";

const OrderQueue = ({ order }: any) => {
  const { id, items, total, name, status, paymentMethod, timestamp } = order;

  const convertTimestamp = new Date(new Date(timestamp).getTime()).getMinutes();
  const STATUS_COLOR_BG_CONTAINER = () => {
    if (status == "Completed") return "bg-purple-200";
    if (status == "Preparing") return "bg-orange-200";
    if (status == "Pending") return "bg-red-200";
  };
  const STATUS_COLOR__BG = () => {
    if (status == "Completed") return "bg-purple-700";
    if (status == "Preparing") return "bg-orange-500";
    if (status == "Pending") return "bg-red-700";
  };
  return (
    <div
      className={`${STATUS_COLOR_BG_CONTAINER()} p-3 min-w-50 w-fit rounded-lg transition-colors duration-200 ease-in-out `}
    >
      <div className="flex justify-between">
        <span>Order #{id}</span>
        <span>{name}</span>
      </div>
      <span>Item: {items.length}x</span>
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
