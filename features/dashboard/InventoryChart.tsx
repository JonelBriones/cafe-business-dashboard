import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const InventoryChart = ({ menuItems }: any) => {
  const inventory = Object.values(menuItems).flat();
  return (
    <div className="h-96 flex flex-col gap-4 border border-neutral-200 rounded-lg p-4">
      <div className="h-full text-red-400">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart width={400} height={400} data={inventory}>
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={"minStock"} stackId="a" fill="#f08080" />
            <Bar dataKey={"stock"} stackId="a" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InventoryChart;
