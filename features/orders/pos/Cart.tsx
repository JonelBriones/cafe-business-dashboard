import React, { Fragment } from "react";
import CartItem from "./CartItem";
import { MenuItem } from "../schemas/menu";
import { CartInterface, OrderItem } from "../schemas/order";
const Cart = ({ order }: { order: OrderItem }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Ordered Items</span>
        <span className="text-neutral-500">
          {order.items.reduce((a, b) => a + b.quantity, 0)}
        </span>
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
