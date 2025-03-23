import React from "react";
import { Line, LineChart } from "recharts";
import { dailySalesData } from "@/data/dailySales";

const Chart = () => {
  return (
    <LineChart width={400} height={400} data={dailySalesData}>
      <Line type={"monotone"} dataKey={"avgOrderValue"} stroke="$8884d8" />
    </LineChart>
  );
};

export default Chart;
