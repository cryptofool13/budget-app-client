import React from 'react';
import {LineChart, Line, CartesianGrid, Legend, XAxis, YAxis} from 'recharts';

function formatData(data) {
  let formattedData = [];
  data.map(item => {
    let entry = {};
    entry.timestamp = new Date(item.timestamp).toDateString();
    item.accounts.forEach(({name, balance}) => {
      entry[name] = balance;
    });
    formattedData.unshift(entry);
  });
  return formattedData;
}

export function colorPicker(randNum) {
  const colors = {
    0: 'red',
    1: 'orange',
    2: 'yellow',
    3: 'green',
    4: 'blue',
    5: 'indigo',
    6: 'violet',
    7: 'deepPink',
    8: 'chartreuse',
    9: 'rebeccapurple',
    10: 'fuchsia',
    11: 'magenta',
    12: 'darkOrchid',
    13: 'crimson',
    14: 'peru',
    15: 'oliveDrab',
    16: 'darkCyan',
    17: 'orangeRed',
    18: 'indianRed',
    19: 'fireBrick',
    20: 'limeGreen',
  };
  return colors[Math.floor(Math.random() * 20)];
}

function getActNames(data) {
  const names = [];
  if (data[0]) {
    data[0].accounts.forEach(act => {
      names.push(act.name);
    });
  }
  return names;
}

function drawLines(data) {
  const formattedData = formatData(data);
  const names = getActNames(data);
  if (names[0]) {
    return (
      <LineChart width={450} height={100} data={formattedData}>
        {names.map(name => {
          return (
            <Line
              key={name}
              dataKey={`${name}`}
              type="monotone"
              stroke={colorPicker(Math.random())}
            />
          );
        })}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Legend layout="horizontal" verticalAlign="top" align="right" />
        <XAxis dataKey="timestamp" />
        <YAxis />
      </LineChart>
    );
  }
}
const FundsChart = ({data}) => {
  return <div className="line chart">{drawLines(data)}</div>;
};

export default FundsChart;
