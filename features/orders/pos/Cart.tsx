import React, { Fragment } from "react";
import CartItem from "./CartItem";

const Cart = ({ order }: any) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Ordered Items</span>
        <span className="text-neutral-500">{order.items.length}</span>
      </div>
      <div className="flex flex-col gap-2">
        {order.items.map((item: any) => (
          <Fragment key={item.name}>
            <CartItem item={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Cart;
