import React from "react";
import "./Stat.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Stat=(props)=>{
     const {detail}= props;
     return(
          <BarChart width={500} height={300} data={detail.stats}>
          <XAxis dataKey="stat.name"/>     
          <Bar dataKey="base_stat" fill="#8884d8" />
          <YAxis dataKey=""/>
        </BarChart>


     )
}
export default Stat;