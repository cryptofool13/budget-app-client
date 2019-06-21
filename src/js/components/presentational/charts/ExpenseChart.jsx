import React from 'react';
import {Pie, PieChart, Legend, Cell} from 'recharts';

import {colorPicker} from './FundsChart.jsx';

function formatData({data}) {
  console.log(data);
  const formattedData = [];

  for (let i in data) {
    const temp = {};
    temp.name = i;
    temp.value = Number(data[i]);
    formattedData.push(temp);
  }

  return formattedData;
}

const ExpenseChart = ({data}) => {
  if (data) console.log(formatData(data));
  const myData = formatData(data);
  return (
    <div className="pie chart">
      <PieChart width={450} height={150}>
        <Pie
          data={myData}
          label
          cx="50%"
          cy="50%"
          nameKey="name"
          dataKey="value">
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
