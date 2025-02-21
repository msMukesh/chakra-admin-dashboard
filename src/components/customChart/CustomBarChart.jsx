import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 200 },
  { name: "B", value: 150 },
  { name: "C", value: 100 },
  { name: "D", value: 250 },
  { name: "E", value: 300 },
  { name: "F", value: 400 },
  { name: "G", value: 350 },
  { name: "H", value: 280 },
  { name: "I", value: 120 },
];

const CustomBarChart = () => {
  return (
    <div style={{ width: "100%", height: "100%", background: "linear-gradient(16deg, #313860, #151928)", borderRadius: 12, padding: 10 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
          <XAxis dataKey="name" tick={{ fill: "white" }} />
          <YAxis tick={{ fill: "white" }} />
          <Bar dataKey="value" fill="white" barSize={10} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
