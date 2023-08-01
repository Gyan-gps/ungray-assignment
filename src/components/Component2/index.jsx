import React from 'react'
import {component2} from '../../assets/constant'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 10,
      }
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      },
    },
    y: {
      ticks: {
        callback: function (value, index, ticks) {
          return Math.round(value/1000) + "k";
        },
      }
    }
  },
};


const data =(arr)=> {
  return{
  labels:arr.map(e=>e.month),
  datasets: [
    {
      label: 'Last year',
      data: arr.map((e) => e.last_year),
      backgroundColor: '#b1effe',
      borderRadius:8,
      width:10,
      barPercentage: 0.6,
      categoryPercentage:0.6
    },
    {
      label: 'This year',
      data: arr.map((e) => e.this_year),
      backgroundColor: '#0068f7',
      borderRadius:8,
      barPercentage: 0.6,
      categoryPercentage:0.6
    },
  ],
};}
function Component2() {
  return (
    <div style={{margin:'20px 0'}}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Comparison</h2>
        <div>
          <select name="" id="">
            <option>month</option>
          </select>
        </div>
      </div>
      <div>
        <Bar height={100} options={options} data={data(component2)} />
      </div>
    </div>
  )
}

export default Component2
