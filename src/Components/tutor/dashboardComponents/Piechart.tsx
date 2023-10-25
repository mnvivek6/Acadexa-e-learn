import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface piedata{
  totalCourse:number|undefined
  totalusers:number|undefined
  revenue:number|undefined
}
const Piechart:React.FC<piedata>=({totalCourse,totalusers,revenue})=> {
  const data = [
    { name: 'totalcourse', value: totalCourse },
    { name: 'purchasedusers', value: totalusers },
    // { name: 'revenue', value: revenue },
    // { name: 'telegram', value: 5000000000 }, // Fixed a typo in the name
  ];

  return (
    <div>
       <ResponsiveContainer width="100%" className=' bg-white rounded-xl ' height={400}>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Piechart;
