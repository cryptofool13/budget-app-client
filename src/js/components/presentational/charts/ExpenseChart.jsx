import React from "react";
import { Pie, PieChart, Legend, Cell } from "recharts";

import { colorPicker } from "./FundsChart.jsx";

const data = [{ name: "test", value: 5 }, { name: "something", value: 12 }];

function formatData({ data }) {
  const formattedData = [];

  for (let i in data) {
    const temp = {};
    temp.name = i;
    temp.value = parseInt(data[i]);
    formattedData.push(temp);
  }

  return formattedData;
}

const ExpenseChart = ({ data }) => {
  if (data) console.log(formatData(data));
  const myData = formatData(data);
  return (
    <div className="pie">
      <PieChart width={550} height={230}>
        <Pie
          data={myData}
          label
          cx="50%"
          cy="50%"
          nameKey="name"
          dataKey="value"
        >
          {myData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorPicker(Math.random())} />
          ))}
        </Pie>
        <Legend layout="vertical" verticalAlign="top" align="right" />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;
