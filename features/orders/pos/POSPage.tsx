"use client";
import React, { useState } from "react";
import ProductList from "./ProductList";
import OrderSummary from "./OrderSummary";
import Orders from "../Orders";
import Cart from "./Cart";
import PaymentOptions from "./PaymentOptions";
import { itemOrder, OrderItem } from "../schemas/order";
import { useDispatch, useSelector } from "react-redux";
import { addNewOrder } from "../../../data/redux/slices/ordersSlice";
import { RootState } from "@/app/store";
const defaultOrderForm: OrderItem = {
  orderNumber: "",
  items: [],
  status: "Pending",
  paymentMethod: "",
  createdAt: null,
  customerName: "",
};
const POSPage = () => {
  const [order, setOrder] = useState<OrderItem>(defaultOrderForm);
  const [cart, setCart] = useState<itemOrder[]>([]);
  const orders = useSelector((state: RootState) => state.orders.value);
  const dispatch = useDispatch();
  const onSubmitOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newOrder = {
      ...order,
      items: cart,
    };
    dispatch(addNewOrder(newOrder));
    setOrder(defaultOrderForm);
    setCart([]);
  };

  return (
    <div className="flex-1 flex gap-4 w-full h-full">
      <div className="flex flex-1 gap-4 flex-col pt-3">
        <Orders ordersData={orders} />
        <ProductList
          order={order}
          setOrder={setOrder}
          cart={cart}
          setCart={setCart}
        />
      </div>

      {/* ORDER SUMMARY */}
      <form
        onSubmit={onSubmitOrder}
        className="flex flex-col justify-between bg-neutral-100 p-4"
      >
        <div className="min-w-100 flex flex-col gap-4">
          <div className="bg-white rounded-lg flex flex-col gap-10 p-4">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <label htmlFor="customerName">Customer:</label>
                  <input
                    type="text"
                    value={order.customerName}
                    onChange={(e) =>
                      setOrder({
                        ...order,
                        customerName: e.target.value,
                      })
                    }
                    placeholder="name"
                    className="outline-none"
                  />
                </div>
                <span>#{orders.length + 1}</span>
              </div>
            </div>
            <Cart cart={cart} />
            <OrderSummary cart={cart} />
          </div>
          <PaymentOptions
            paymentMethod={order.paymentMethod}
            setOrder={setOrder}
            order={order}
          />
        </div>
        <div className="flex gap-4">
          <span className="bg-white rounded-lg p-2 w-full text-center ">
            Print
          </span>
          <button
            disabled={cart.length === 0}
            type="submit"
            className={`bg-green-500 rounded-lg p-2 w-full text-center text-white ${
              cart.length === 0 ? "opacity-50" : ""
            }`}
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default POSPage;
