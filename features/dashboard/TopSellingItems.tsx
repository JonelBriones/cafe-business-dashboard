import React, { Fragment, useEffect, useState } from "react";

import { menuItems as menuItemsData } from "@/data/menuItems";
import ToggleButton from "@/components/dashboard/ui/order/ToggleButton";
import { Menu } from "../orders/schemas/menu";
import { OrderItem } from "../orders/schemas/order";

const TopSellingItems = ({ orders }: { orders: OrderItem[] }) => {
  const [toggleCategory, setToggleCategory] = useState("all");

  const menuItems: Menu = menuItemsData;
  const categories = ["all", ...Object.keys(menuItems)];

  let itemsOfMenuCategory = menuItems[toggleCategory]?.flatMap(
    (item: any) => item.name
  );

  let ordersForToday =
    toggleCategory === "all"
      ? orders.flatMap((order) => order.items)
      : orders
          .flatMap((order) => order.items)
          .filter((order) => itemsOfMenuCategory.includes(order.name));

  const getTopSellingOrders = () => {
    let hash = new Map<string, { name: string; sold: number }>();

    for (let order of ordersForToday) {
      const exist = hash.get(order.name);
      hash.set(order.name, {
        name: order.name,
        sold: exist ? exist.sold + order.quantity : order.quantity,
      });
    }

    return [...hash.values()].sort((a, b) => b.sold - a.sold);
  };

  return (
    <div className="h-96 flex flex-col gap-4 border border-neutral-200 rounded-lg p-4">
      <div className="flex gap-2 overflow-y-auto place-items-center">
        {categories.map((category) => (
          <Fragment key={category}>
            <ToggleButton
              onClick={() => {
                setToggleCategory(category);
              }}
              text={category}
              toggle={toggleCategory}
            />
          </Fragment>
        ))}
      </div>
      <div className="overflow-auto flex-1">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">Item</th>
              <th className="p-4 text-right">Sold</th>
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {getTopSellingOrders().map((item) => (
              <tr key={item.name} className="nth-[odd]:bg-neutral-100">
                <td className="p-4 text-left">{item.name}</td>
                <td className="p-4 text-right">{item.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingItems;
