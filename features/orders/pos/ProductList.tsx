import React, { Fragment, useState } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { menuItems as menuData } from "@/data/menuItems";

const ProductList = ({ order, setOrder }: any) => {
  const categories = ["All Menu", ...Object.keys(menuData)];
  const [selectCategory, setSelectCategory] = useState("All Menu");
  const allItems = [...Object.values(menuData)].flat();

  let menuItems =
    selectCategory === "All Menu"
      ? allItems
      : menuData[selectCategory as keyof typeof menuData];

  return (
    <Fragment>
      <h4 className="text-lg font-semibold">Food Menu</h4>
      <div className="flex gap-4 overflow-auto w-208 pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectCategory(category)}
            className={`flex place-items-center gap-2 cursor-pointer border-2 p-2 rounded-lg min-w-40  ${
              selectCategory == category
                ? "border-green-500"
                : "border-neutral-200"
            } transition-colors duration-100 ease-in-out`}
          >
            <div className="flex place-items-center justify-center w-10">
              <Image
                src={`/images/categories/${category.toLowerCase()}.png`}
                height={0}
                width={0}
                sizes="100vh"
                alt={"dessert"}
                className="w-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{category}</span>
              <span className="text-xs text-neutral-500">### items</span>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 overflow-auto h-145 pb-4 w-208">
        {menuItems.map((item) => (
          <Fragment key={item.id}>
            <ProductCard
              item={item}
              order={order}
              setOrder={setOrder}
              selectCategory={selectCategory}
            />
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductList;
