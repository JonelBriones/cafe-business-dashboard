"use client";
import React, { useState } from "react";
import ProductList from "./ProductList";
import OrderSummary from "./OrderSummary";
import Orders from "../Orders";
import Cart from "./Cart";
import PaymentOptions from "./PaymentOptions";

import { OrderItem } from "../schemas/order";

const POSPage = () => {
  const [order, setOrder] = useState<OrderItem>({
    id: "103",
    items: [
      { id: "4", name: "Cappuccino", quantity: 1, price: 4.0 },
      { id: "24", name: "Blueberry Muffin", quantity: 1, price: 2.5 },
    ],
    status: "Preparing",
    paymentMethod: "Card",
    createdAt: "2025-03-19T11:15:00Z",
    customerName: "Jonel",
  });
  const [paymentMethod, setPaymentMethod] = useState("Card");

  return (
    <div className="flex-1 flex gap-4 w-full h-full">
      <div className="flex flex-1 gap-4 flex-col pt-3">
        <Orders />
        <ProductList order={order} setOrder={setOrder} />
      </div>

      {/* ORDER SUMMARY */}
      <div className="flex flex-col justify-between bg-neutral-100 p-4">
        <div className="min-w-100 flex flex-col gap-4">
          <div className="bg-white rounded-lg flex flex-col gap-10 p-4">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>{order.customerName}</span>
                <span>{order.id}</span>
              </div>
              <div className="flex flex-col">
                <span> actions</span>
                <span>total items</span>
              </div>
            </div>
            <Cart order={order} />
            <OrderSummary order={order} />
          </div>
          <PaymentOptions
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>
        <div className="flex gap-4">
          <span className="bg-white rounded-lg p-2 w-full text-center ">
            Print
          </span>
          <span className="bg-green-500 rounded-lg p-2 w-full text-center text-white">
            Place Order
          </span>
        </div>
      </div>
    </div>
  );
};

export default POSPage;
