"use client";
import Link from "next/link";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <div className="h-20 w-full flex justify-between">
        <span>MANGAGE ORDERS HERE</span>
        <Link href={"/dashboard/orders/pos"}>VIEW POS</Link>
      </div>
    </Fragment>
  );
};

export default page;
