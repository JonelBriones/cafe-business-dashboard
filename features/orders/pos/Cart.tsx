import React, { Fragment } from "react";
import CartItem from "./CartItem";
import { itemOrder } from "../schemas/order";
const Cart = ({ cart }: { cart: itemOrder[] }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Ordered Items</span>
        <span className="text-neutral-500">
          {cart.reduce((a, b) => a + b.quantity, 0)}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {cart.map((item: any) => (
          <Fragment key={item.name}>
            <CartItem item={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Cart;
