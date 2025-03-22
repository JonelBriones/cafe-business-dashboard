"use client";
import React, { useState } from "react";
import ProductList from "./ProductList";
import OrderSummary from "./OrderSummary";
import Orders from "../Orders";
import Cart from "./Cart";
import PaymentOptions from "./PaymentOptions";
const orders = [
  {
    id: "101",
    items: [
      { name: "Latte", quantity: 2, price: 4.5 },
      { name: "Croissant", quantity: 1, price: 3.0 },
    ],
    total: 12.0,
    status: "Completed",
    paymentMethod: "Card",
    timestamp: "2025-03-19T10:30:00Z",
    name: "John",
  },
  {
    id: "102",
    items: [
      { name: "Espresso", quantity: 1, price: 3.0 },
      { name: "Iced Coffee", quantity: 1, price: 3.5 },
    ],
    total: 6.5,
    status: "Pending",
    paymentMethod: "Cash",
    timestamp: "2025-03-19T11:00:00Z",
    name: "Arron",
  },
  {
    id: "103",
    items: [
      { name: "Cappuccino", quantity: 1, price: 4.0 },
      { name: "Blueberry Muffin", quantity: 1, price: 2.5 },
    ],
    total: 6.5,
    status: "Preparing",
    paymentMethod: "Card",
    timestamp: "2025-03-19T11:15:00Z",
    name: "Jonel",
  },
];
const POSPage = () => {
  const [order, setOrder] = useState({
    id: "103",
    items: [
      { name: "Cappuccino", quantity: 1, price: 4.0 },
      { name: "Blueberry Muffin", quantity: 1, price: 2.5 },
    ],
    total: 6.5,
    status: "Preparing",
    paymentMethod: "Card",
    timestamp: "2025-03-19T11:15:00Z",
  });
  const [paymentMethod, setPaymentMethod] = useState("Card");

  return (
    <div className="flex flex-col h-full">
      {/* POS */}
      <div className="flex-1 flex gap-4 w-full">
        <div className="flex flex-1 gap-4 flex-col pt-3">
          <Orders orders={orders} />
          <ProductList order={order} setOrder={setOrder} />
        </div>

        {/* ORDER SUMMARY */}
        <div className="flex flex-col justify-between bg-neutral-100 p-4">
          <div className="min-w-100 flex flex-col gap-4">
            <div className="bg-white rounded-lg flex flex-col gap-10 p-4">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span>Name</span>
                  <span>Order #000</span>
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
    </div>
  );
};

export default POSPage;
