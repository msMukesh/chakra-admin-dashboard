import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./SalesChart.css";
const data = [
  { name: "Jan", value1: 100, value2: 200 },
  { name: "Feb", value1: 180, value2: 300 },
  { name: "Mar", value1: 150, value2: 250 },
  { name: "Apr", value1: 220, value2: 350 },
  { name: "May", value1: 280, value2: 450 },
  { name: "Jun", value1: 250, value2: 500 },
  { name: "Jul", value1: 230, value2: 450 },
  { name: "Aug", value1: 210, value2: 370 },
  { name: "Sep", value1: 190, value2: 320 },
  { name: "Oct", value1: 270, value2: 400 },
  { name: "Nov", value1: 290, value2: 480 },
  { name: "Dec", value1: 310, value2: 510 },
];

const SalesOverviewChart = () => {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Sales Overview</h3>
      <p className="chart-subtitle">
        <span className="positive">(+5)</span> more in 2021
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 10 }}>
          <defs>
            <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D3748" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="name" tick={{ fill: "#4A5568", fontSize: 12 }} />
          <YAxis tick={{ fill: "#4A5568", fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "6px" }} />
          <Area type="monotone" dataKey="value2" stroke="#2D3748" fillOpacity={1} fill="url(#colorValue2)" />
          <Area type="monotone" dataKey="value1" stroke="#4FD1C5" fillOpacity={1} fill="url(#colorValue1)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverviewChart;
