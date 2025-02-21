import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value1: 400, value2: 200 },
  { name: "Feb", value1: 300, value2: 180 },
  { name: "Mar", value1: 250, value2: 220 },
  { name: "Apr", value1: 320, value2: 260 },
  { name: "May", value1: 480, value2: 280 },
  { name: "Jun", value1: 500, value2: 300 },
  { name: "Jul", value1: 450, value2: 270 },
  { name: "Aug", value1: 400, value2: 250 },
  { name: "Sep", value1: 380, value2: 230 },
  { name: "Oct", value1: 420, value2: 260 },
  { name: "Nov", value1: 480, value2: 280 },
  { name: "Dec", value1: 500, value2: 290 },
];

const SalesOverviewChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
        <defs>
          <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#333" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#333" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 500]} tickCount={6} />
        <Tooltip />

        {/* First area (light blue) */}
        <Area
          type="monotone"
          dataKey="value1"
          stroke="#4FD1C5"
          fillOpacity={1}
          fill="url(#colorValue1)"
          strokeWidth={2}
        />

        {/* Second area (dark) */}
        <Area
          type="monotone"
          dataKey="value2"
          stroke="#333"
          fillOpacity={1}
          fill="url(#colorValue2)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesOverviewChart;
