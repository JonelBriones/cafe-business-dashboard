"use client";

import React, { Fragment } from "react";

import OrdersTable from "@/features/orders/OrdersTable";
const page = () => {
  return (
    <div className="pr-6 py-6">
      <h1 className="text-lg font-semibold my-4">Orders List</h1>
      <OrdersTable />
    </div>
  );
};

export default page;
