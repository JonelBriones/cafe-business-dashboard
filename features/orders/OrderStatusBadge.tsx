import React from "react";
import { OrderItem } from "./schemas/order";

type Params = {
  text: string;
  selectedStatus: string;
  total: number;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
};
const OrderStatusBadge = ({
  text,
  selectedStatus,
  total,
  setSelectedStatus,
}: Params) => {
  const STATUS_COLOR_BORDER_CONTAINER = () => {
    if (text == selectedStatus) {
      if (text == "All") return "border-blue-500";
      if (text == "Completed") return "border-green-500";
      if (text == "In Progress") return "border-orange-500";
      if (text == "Pending") return "border-purple-500";
      if (text == "Cancelled") return "border-red-500";
    }
    return "border-neutral-200";
  };
  const STATUS_COLOR_BORDER = () => {
    if (text == "All") return "bg-blue-500";
    if (text == "Completed") return "bg-green-500";
    if (text == "In Progress") return "bg-orange-500";
    if (text == "Pending") return "bg-purple-500";
    if (text == "Cancelled") return "bg-red-500";
  };

  return (
    <button
      onClick={() => setSelectedStatus(text)}
      className={`flex gap-1 justify-center place-items-center px-4 text-center rounded-3xl border-2 p-1 cursor-pointer transition-colors duration-100 ease-in-out ${STATUS_COLOR_BORDER_CONTAINER()}`}
    >
      {text}
      <span
        className={`rounded-full text-white bg-amber-400 text-xs size-5 flex justify-center place-items-center ${STATUS_COLOR_BORDER()}`}
      >
        {total}
      </span>
    </button>
  );
};

export default OrderStatusBadge;
