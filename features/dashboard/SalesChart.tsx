import React, { Fragment, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
const SalesChart = ({ dailySalesData }: { dailySalesData: any }) => {
  const types = ["totalSales", "totalOrders", "avgOrderValue"];
  const [toggleType, selectToggle] = useState("totalOrders");
  const [toggleTimeline, setToggleTimeline] = useState("Month");
  const timelines = ["Week", "Month"];
  const getMonthSales = () => {
    console.log();
  };

  let sales =
    toggleTimeline == "Month"
      ? dailySalesData.filter(
          (day) => new Date(day.date).getMonth() === new Date().getMonth()
        )
      : dailySalesData.slice(dailySalesData.length - 7, dailySalesData.length);
  console.log(sales);
  return (
    <div className="h-96 flex flex-col gap-4 border border-neutral-200 rounded-lg p-4">
      <div className="flex gap-2">
        {timelines.map((timeline) => (
          <button
            key={timeline}
            onClick={() => setToggleTimeline(timeline)}
            className={`py-1 px-2 h-fit cursor-pointer bg-accent rounded-full text-white text-sm ${
              toggleTimeline == timeline ? "" : "opacity-50 hover:opacity-70"
            } transition-opacity ease-in-out 100ms`}
          >
            This {timeline}
          </button>
        ))}
      </div>
      <div className="h-full">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart width={48} height={48} data={sales}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={"totalSales"} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
