"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
const Inventory = () => {
  const menuItems = useSelector((state: RootState) => state.inventory.value);
  // const [menuItems, setMenuItems] = useState(
  //   [...Object.values(menuItemsData)].flat()
  // );
  console.log(menuItems);
  const subtractStock = (id: string) => {
    // const updatedMenuItems = [
    //   ...menuItems.map((item) =>
    //     item.id === id ? { ...item, totalStock: item.totalStock - 1 } : item
    //   ),
    // ];
    // setMenuItems(updatedMenuItems);
    // console.log(updatedMenuItems);
  };
  const addStock = (id: string) => {
    // const updatedMenuItems = [
    //   ...menuItems.map((item) =>
    //     item.id === id ? { ...item, totalStock: item.totalStock + 1 } : item
    //   ),
    // ];
    // setMenuItems(updatedMenuItems);
    // console.log(updatedMenuItems);
  };
  const dollarFormat = (total: number) =>
    total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <div className="relative h-full">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Product Name</th>
            <th className="p-4 text-left">In stock</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Update stock</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, idx) => (
            <tr key={idx} className="border-b border-neutral-200 p-4">
              <td className="p-4 text-left">
                <Image
                  src={item.image.toLowerCase()}
                  height={0}
                  width={0}
                  sizes="100vh"
                  alt={"dessert"}
                  className="size-10"
                />
              </td>
              <td className="p-4 text-left">{item.name}</td>
              <td className="p-4">
                <span
                  className={`rounded-lg p-2 w-20 text-center block ${
                    parseFloat((item.totalStock / item.minStock).toFixed(2)) > 2
                      ? "bg-green-300"
                      : parseFloat(
                          (item.totalStock / item.minStock).toFixed(2)
                        ) > 1
                      ? "bg-yellow-300"
                      : "bg-red-300"
                  }`}
                >
                  {item.totalStock} / {item.minStock}
                </span>
              </td>
              <td className="p-4 text-left">
                {dollarFormat(item.costPerUnit)}
              </td>
              <td className="p-4 text-left">
                <div className="flex place-items-center w-30 justify-between h-full gap-4">
                  <button
                    disabled={item.totalStock === 0}
                    onClick={() => subtractStock(item.id)}
                    className={`bg-neutral-200 rounded-full size-6 flex justify-center place-items-center text-sm ${
                      item.totalStock === 0 ? "opacity-50" : "cursor-pointer"
                    }`}
                  >
                    -
                  </button>
                  <span>{item.totalStock}</span>
                  <button
                    onClick={() => addStock(item.id)}
                    className="bg-green-500 text-white rounded-full size-6 flex justify-center place-items-center text-sm cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-4 text-left">
                <div className="flex place-items-center gap-2 cursor-pointer hover:bg-red-200 rounded-lg p-2 w-fit">
                  Remove <FaRegTrashCan size={"1.25rem"} color="red" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
