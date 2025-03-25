import Image from "next/image";
import React, { useState } from "react";
import { itemOrder } from "../schemas/order";

const ProductCard = ({ item, order, setOrder, cart, setCart }: any) => {
  const { name, category, price, id } = item;
  let qty = cart.find((item: any) => item.name == name)?.quantity || 0;
  const removeItem = () => {
    let qty = cart.find((item: itemOrder) => item.name == name).quantity;

    if (qty > 1) {
      let updateItem = cart.map((item: itemOrder) =>
        item.name == name ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updateItem);
    } else {
      let removedItem = cart.filter((item: itemOrder) => item.name !== name);
      setCart(removedItem);
    }
  };
  const addItem = () => {
    let itemExist = cart.find((item: itemOrder) => item.name == name);

    if (itemExist) {
      let updateItem = cart.map((item: itemOrder) =>
        item.name == name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updateItem);
    } else {
      setCart([...cart, { name, price, id, quantity: 1 }]);
    }
  };

  const dollarFormat = (total: number) =>
    total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const [error, setError] = useState(false);
  return (
    <div
      className={`rounded-lg w-full border-2 h-fit  shadow-md ${
        order.items.find((item: any) => item.name == name)
          ? "border-green-500"
          : "border-transparent"
      }`}
    >
      <div className="bg-neutral-200 rounded-t-lg h-26 flex place-items-center justify-center">
        <Image
          src={item.image}
          height={0}
          width={0}
          sizes="100vh"
          alt={item.name}
          className="w-20"
          onError={() => {
            if (!error) {
              setError(true);
            }
          }}
        />
      </div>
      <div className="flex flex-col gap-3 p-2">
        <div className="flex flex-col">
          <span className="text-sm text-neutral-500">{category}</span>
          <span className="font-semibold h-12">{name.toLowerCase()}</span>
        </div>

        <span className="font-semibold">{dollarFormat(price)}</span>
        <div className="flex justify-center gap-4">
          <button
            disabled={qty == 0}
            onClick={() => removeItem()}
            className={`bg-neutral-200 rounded-full size-6 flex justify-center place-items-center text-sm ${
              qty == 0 ? "" : "cursor-pointer"
            } `}
          >
            -
          </button>
          <span className="w-10 text-center">{qty}</span>
          <button
            onClick={() => addItem()}
            className="bg-green-500 text-white rounded-full size-6 flex justify-center place-items-center text-sm cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
