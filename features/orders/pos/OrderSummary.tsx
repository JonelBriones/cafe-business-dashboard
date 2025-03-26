import React, { useEffect } from "react";
import { CartInterface, itemOrder, OrderItem } from "../schemas/order";

const OrderSummary = ({ cart }: { cart: itemOrder[] }) => {
  const subtotal = parseFloat(
    cart
      .reduce(
        (accumulator: any, currentVal: any) =>
          accumulator + currentVal.price * currentVal.quantity,
        0
      )
      .toFixed(2)
  );

  const CALIFORNIA_TAX_RATE = 6.0;
  const MANDATORY_LOCAL_RATE = 1.25;
  const SALES_TAX_RATE = (CALIFORNIA_TAX_RATE + MANDATORY_LOCAL_RATE) / 100;
  const ROUNDED_SALES = Math.round(SALES_TAX_RATE * 1000) / 1000;
  const tax = parseFloat((subtotal * ROUNDED_SALES).toFixed(2));
  const total = subtotal + tax;

  const dollarFormat = (total: number) =>
    total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <div className="flex flex-col gap-10">
      <div className="text-neutral-500">
        <span className="font-semibold">Payment Summary</span>
        <div className="flex justify-between my-2">
          <span>Subtotal</span>
          <span className="font-semibold text-black ">
            {dollarFormat(subtotal)}
          </span>
        </div>
        <div className="flex justify-between my-2">
          <span>Tax</span>
          <span className="font-semibold text-black ">${tax}</span>
        </div>
      </div>
      <div className="flex justify-between text-black font-semibold">
        <span>Total</span>
        <span>{dollarFormat(total)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
