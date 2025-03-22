import React, { Fragment } from "react";
import { dailySalesData as dailySales } from "@/data/dailySales";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const Reports = () => {
  const dollarFormat = (total: number) =>
    total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  let today_sales = dailySales[0].totalSales;
  let today_orders = dailySales[0].totalOrders;
  const compareTodaysSales = (compare_sale: number) =>
    parseFloat(
      (((today_sales - compare_sale) / compare_sale) * 100).toFixed(2)
    );
  const compareTodaysOrders = (compare_order: number) =>
    parseFloat(
      (((today_orders - compare_order) / compare_order) * 100).toFixed(2)
    );

  const percentFormat = (value: number) => `${value}%`;

  const arrowTrend = (value: number) => {
    // console.log(value);
    return value > 0 ? (
      <FaArrowTrendUp size={"1.25rem"} color="green" />
    ) : value == 0 ? (
      ""
    ) : (
      <FaArrowTrendDown size={"1.25rem"} color="red" />
    );
  };
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-us", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

  return (
    <div className="pr-6 py-6">
      Reports
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="p-4 text-left"></th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Total Orders</th>
            <th className="p-4 text-left">Total Sales</th>
            <th className="p-4 text-left">AvgOrderValue</th>
          </tr>
        </thead>
        <tbody>
          {dailySales.map((sale, idx) => (
            <tr key={idx} className="nth-[odd]:bg-neutral-100">
              <td className="p-4 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="p-4 text-left">{formatDate(sale.date)}</td>
              <td className="p-4 text-left">
                <div className="flex gap-4 place-items-center justify-between w-3/5">
                  <span>{sale.totalOrders}</span>
                  <span className="flex gap-2 place-items-center">
                    {percentFormat(compareTodaysOrders(sale.totalOrders))}
                    {arrowTrend(compareTodaysOrders(sale.totalOrders))}
                  </span>
                </div>
              </td>
              <td className="p-4 text-left">
                <div className="flex place-items-center justify-between w-3/4">
                  <span>{dollarFormat(sale.totalSales)}</span>
                  <span className="flex gap-2 place-items-center">
                    {percentFormat(compareTodaysSales(sale.totalSales))}
                    {arrowTrend(compareTodaysSales(sale.totalSales))}
                  </span>
                </div>
              </td>
              <td className="p-4 text-left">
                {dollarFormat(sale.avgOrderValue)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
