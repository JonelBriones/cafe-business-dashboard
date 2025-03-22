import React from "react";

const OrderStatusBadge = ({
  text,
  selectedStatus,
  total,
  setSelectedStatus,
}: any) => {
  const STATUS_COLOR_BORDER_CONTAINER = () => {
    if (text == selectedStatus) {
      if (text == "all") return "border-green-500";
      if (text == "pending") return "border-red-500";
      if (text == "preparing") return "border-orange-500";
      if (text == "completed") return "border-purple-500";
    }
    return "border-neutral-200";
  };
  const STATUS_COLOR_BORDER = () => {
    if (text == "all") return "bg-green-500";
    if (text == "pending") return "bg-red-500";
    if (text == "preparing") return "bg-orange-500";
    if (text == "completed") return "bg-purple-500";
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
