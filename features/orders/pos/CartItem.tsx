import React from "react";

const CartItem = ({ item }: any) => {
  const { name, price, quantity } = item;
  return (
    <div className="flex justify-between gap-2 text-neutral-500">
      <div className="flex gap-2">
        <span>{quantity}x</span>
        <span>{name}</span>
      </div>
      <span className="font-semibold text-black">
        ${(price * quantity).toFixed(2)}
      </span>
    </div>
  );
};

export default CartItem;
