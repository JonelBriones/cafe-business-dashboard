import React, { Fragment } from "react";
import { OrderItem } from "../orders/schemas/order";
import { dollarFormat, getSubtotalWithTax } from "@/hooks/index";
const DashboardStats = ({ orders }: { orders: OrderItem[] }) => {
  const calculate_today_revenue = () => {
    let total = 0;
    for (let order of orders) {
      let subtotal = order.items.reduce((a, b) => a + b.quantity + b.price, 0);
      console.log("sub", subtotal);
      total += subtotal;
    }
    return dollarFormat(parseFloat(getSubtotalWithTax(total)));
  };
  const calculate_today_pending_orders = () => {
    let total = 0;
    for (let order of orders) {
      if (order.status === "Pending") total++;
    }
    return total;
  };
  const calculate_today_sales = () => {
    let qty = 0;
    for (let order of orders) {
      let itemsQty = order.items.reduce((a, b) => a + b.quantity, 0);
      qty += itemsQty;
    }
    return qty;
  };
  const stats = {
    Revenue: calculate_today_revenue(),
    Sales: calculate_today_sales(),
    Pending: calculate_today_pending_orders(),
    Orders: orders.length,
  };

  return (
    <div className="flex gap-4 rounded-lg border border-neutral-200 p-2 px-4 w-fit">
      {Object.keys(stats).map((stat, idx) => (
        <Fragment key={idx}>
          <div className="flex flex-col gap-1 place-items-center ">
            <span className="text-neutral-600">Total {stat}</span>
            <span className="text-lg font-semibold">
              {stats[stat as keyof typeof stats]}
            </span>
          </div>
          {idx < Object.keys(stats).length - 1 && (
            <div className="relative">
              <span className="absolute border-l border-neutral-200 w-[1px] h-full" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default DashboardStats;
