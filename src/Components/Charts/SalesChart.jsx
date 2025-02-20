import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { userData } from "../../data";

const SalesChart = ({ openSlider }) => {
  return (
    <div className={`my-3 ml-7 px-0 mr-auto flex flex-col ${openSlider ? "h-[400px] w-[590px]" : "h-[400px] w-[700px]"} items-center justify-center rounded border border-gray-700 text-sm shadow-lg`}>
      <h6 className=" border-b border-zinc-300 w-full mx-0 pb-[15px] pr-5 text-gray-700"> فروش ماهانه</h6>
      <div className="mt-4">
        <ResponsiveContainer width={600} height={300}>
          <AreaChart
            width={500}
            height={400}
            data={userData}
            margin={{
              top: 20,
              right: 22,
              left: 22,
              bottom: 0,
            }}
          >
            {/* Grid lines configuration */}
            <CartesianGrid
              strokeDasharray="none"
              stroke="#EBEBEB"
              vertical={false}
            />
            {/* X Axis configuration */}
            <XAxis dataKey="name" interval={0} />
            {/* Tooltip configuration */}
            <Tooltip
              formatter={(value) => {
                return new Intl.NumberFormat("fa-IR", {
                  useGrouping: false,
                }).format(value); // Format numbers
              }}
              labelFormatter={(label) => `${label} ۱۴۰۳`} // Label format
              contentStyle={{ borderRadius: "10px", padding: "0px" }}
              labelStyle={{
                borderBottom: "2px solid #EBEBEB",
                background: "#E7EBEE",
                padding: "7px 10px",
                borderRadius: "10px 10px 0px 0px",
              }}
              itemStyle={{ textAlign: "center", padding: "8px 10px" }}
            />
            {/* Area chart for Digital Products */}
            <Area
              type="monotone"
              dataKey="کالاهای دیجیتال"
              stackId="1"
              stroke="#0F53FD"
              fill="#0F53FD"
              strokeWidth={3}
            />
            {/* Area chart for Electronics */}
            <Area
              type="monotone"
              dataKey="لوازم الکترونیکی"
              stackId="1"
              stroke="#30C185"
              fill="#30C185"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;