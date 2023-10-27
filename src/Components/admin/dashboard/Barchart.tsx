import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Barchart() {
  const data = [
    {
      name: 'Tech',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Fashion',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'General Knowledge',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'cooking',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Music',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    
  ];

  return (
    <div>
      <ResponsiveContainer width="90%" className="justify-end bg-white rounded-xl mb-10 " height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barchart;
