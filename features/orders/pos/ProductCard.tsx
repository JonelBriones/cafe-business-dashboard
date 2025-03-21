import Image from "next/image";
import React, { useState } from "react";

const ProductCard = ({ item, order, setOrder }: any) => {
  const { name, category, price, image } = item;
  const [quantity, setQuantity] = useState(
    order.items.find((item: any) => item.name == name)?.quantity || 0
  );

  const removeItem = () => {
    const updatedOrder = {
      ...order,
      items:
        quantity > 1
          ? [
              ...order.items.map((item: any) =>
                item.name == name
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            ]
          : [...order.items.filter((item: any) => item.name !== name)],
    };

    setOrder(updatedOrder);
    setQuantity((prev: number) => prev - 1);
  };
  const addItem = () => {
    const updatedOrder = {
      ...order,
      items:
        quantity > 0
          ? [
              ...order.items.map((item: any) =>
                item.name == name
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            ]
          : [
              ...order.items,
              {
                name,
                price,
                quantity: quantity + 1,
              },
            ],
    };

    setOrder(updatedOrder);
    setQuantity((prev: number) => prev + 1);
  };

  const dollarFormat = (total: number) =>
    total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const [error, setError] = useState(false);
  return (
    <div
      className={`rounded-lg w-full border-2  shadow-md ${
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
            disabled={quantity == 0}
            onClick={() => removeItem()}
            className="bg-neutral-200 rounded-full size-6 flex justify-center place-items-center text-sm"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => addItem()}
            className="bg-green-500 text-white rounded-full size-6 flex justify-center place-items-center text-sm"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
