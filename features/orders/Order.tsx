import React, { useState } from "react";
import { itemOrder, OrderItem } from "./schemas/order";
import { MenuItem } from "./schemas/menu";
type Params = {
  order: OrderItem;
  orders: OrderItem[];
  setOrders: any;
};
const Order = ({ order, orders, setOrders }: Params) => {
  const { id, customerName, items, status, createdAt } = order;
  const [toggleUpdateStatus, setToggleUpdateStatus] = useState(false);
  const total = items.reduce((a, b) => a + b.price * b.quantity, 0);
  const statuses = ["In Progress", "Completed", "Cancelled"];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(createdAt);
  const weekday = date.getDay().toLocaleString("en-us");
  const weekdayLong = date.toLocaleString("en-us", {
    dateStyle: "long",
  });
  const formateDate = `${
    weekdays[weekday as keyof typeof weekdays]
  }, ${weekdayLong}`;

  const foramteTime = date.toLocaleTimeString("en-us", {
    timeStyle: "short",
  });
  const STATUS_COLOR = (val: string) => {
    let initial_status = val || status;
    if (initial_status == "Completed") return "bg-green-200";
    if (initial_status == "Pending") return "bg-purple-200";
    if (initial_status == "In Progress") return "bg-orange-200";
    if (initial_status == "Cancelled") return "bg-red-200";
  };
  const STATUS_TEXT_COLOR = (val: string) => {
    let initial_status = val || status;
    if (initial_status == "Completed") return "text-green-700";
    if (initial_status == "In Progress") return "text-orange-700";
    if (initial_status == "Pending") return "text-purple-700";
    if (initial_status == "Cancelled") return "text-red-700";
  };
  const dollarFormat = (total: number) =>
    total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const updateStatus = (status: string) => {
    setOrders(
      orders.map((order) =>
        order.id == id ? { ...order, status: status } : order
      )
    );

    setToggleUpdateStatus(false);
  };

  return (
    <div className="w-90 md:w-full flex flex-col justify-between gap-4 border border-neutral-200 shadow-md rounded-lg p-4 relative">
      {toggleUpdateStatus && (
        <div
          onMouseLeave={() => setToggleUpdateStatus(false)}
          className="absolute h-full w-full  bg-neutral-200 top-0 left-0 rounded-lg flex place-items-center justify-center"
        >
          <div className="flex flex-col gap-8">
            {statuses.map((status: string) => (
              <button
                disabled={status === order.status}
                key={status}
                onClick={() => updateStatus(status)}
                className={`text-lg font-semibold p-1 px-10 rounded-2xl ${STATUS_COLOR(
                  status
                )} ${STATUS_TEXT_COLOR(status)}  ${
                  status === order.status ? "opacity-50" : "cursor-pointer"
                }`}
              >
                {status}
              </button>
            ))}
            <button
              onClick={() => setToggleUpdateStatus(false)}
              className="text-lg font-semibold p-1 px-10 rounded-2xl bg-white cursor-pointer"
            >
              Go back
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between place-items-center">
          <div className="flex flex-col">
            <span className="font-semibold">{customerName}</span>
            <span className="text-xs">{id}</span>
          </div>
          <span
            className={`text-sm font-semibold p-1 px-4 rounded-2xl ${STATUS_COLOR(
              ""
            )} ${STATUS_TEXT_COLOR("")}`}
          >
            {status}
          </span>
        </div>
        <div className="flex justify-between text-neutral-500">
          <span>{formateDate}</span>
          <span>{foramteTime}</span>
        </div>
      </div>
      <div className="flex flex-col border-t gap-4 pt-4 border-neutral-200">
        <div className="flex justify-between">
          <span className="font-semibold">{items.length} Items</span>
          <span className="font-semibold">{dollarFormat(total)}</span>
        </div>
        <div className="flex flex-col">
          {items.map((item: itemOrder) => (
            <div key={item.id} className="flex justify-between">
              <span className="text-neutral-500">
                {item.quantity} {item.name}
              </span>
              <span className="font-semibold">{dollarFormat(item.price)}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        disabled={status === "Completed" || status === "Cancelled"}
        className={`text-center w-full rounded-lg p-2 ${STATUS_COLOR("")} ${
          status === "Completed" || status === "Cancelled"
            ? "opacity-50"
            : "cursor-pointer"
        }`}
        onClick={() => setToggleUpdateStatus(true)}
      >
        {status === "Completed"
          ? "Completed"
          : status === "Cancelled"
          ? "Cancelled"
          : "Update Status"}
      </button>
    </div>
  );
};

export default Order;
