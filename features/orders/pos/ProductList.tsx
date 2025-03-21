import React, { Fragment, useState } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { menuItems as menuData } from "@/data/menuItems";
const menuItems = [
  {
    id: "1",
    name: "Espresso",
    category: "Coffee",
    price: 3.0,
    image: "/images/espresso.jpg",
  },
  {
    id: "2",
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    image: "/images/latte.jpg",
  },
  {
    id: "3",
    name: "Cappuccino",
    category: "Coffee",
    price: 4.0,
    image: "/images/cappuccino.jpg",
  },
  {
    id: "4",
    name: "Iced Coffee",
    category: "Coffee",
    price: 3.5,
    image: "/images/iced_coffee.jpg",
  },
  {
    id: "5",
    name: "Blueberry Muffin",
    category: "Bakery",
    price: 2.5,
    image: "/images/muffin.jpg",
  },
  {
    id: "6",
    name: "Croissant",
    category: "Bakery",
    price: 3.0,
    image: "/images/croissant.jpg",
  },
];

const ProductList = ({ order, setOrder }: any) => {
  const categories = [...Object.keys(menuData), "All Menu"];
  const [selectCategory, setSelectCategory] = useState("All Menu");

  console.log(categories);
  return (
    <Fragment>
      <h4 className="text-lg font-semibold mt-3">Food Menu</h4>
      <div className="overflow-hidden w-208">
        <div className="flex gap-4 overflow-auto">
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
      </div>
      <div className="grid grid-cols-4 gap-2">
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
