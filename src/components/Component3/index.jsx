import React, { useEffect, useState } from 'react'
import '../../styles/Component3.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const data = (score) => {
  return {
    // labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ["#006bf7", "#eeeff2",],
        hoverBackgroundColor: ["#006bf7", "#eeeff2"],
        circumference: 180,
        rotation: 270
      }
    ],
  }
};

const gaugeText = {
  id: "gaugeText",
  beforeDatasetsDraw(chart) {
    const { ctx, data, chartArea } = chart;
    const xCenter = chart.getDatasetMeta(0).data[0].x
    const yCenter = chart.getDatasetMeta(0).data[0].y
    // console.log(chart.getDatasetMeta(0).data[0].x)
    chart.getDatasetMeta(0).data[0].innerRadius = chart.getDatasetMeta(0).data[0].outerRadius - 10
    chart.getDatasetMeta(0).data[1].innerRadius = chart.getDatasetMeta(0).data[1].outerRadius - 10
    ctx.save();
    ctx.fillStyle = 'gray';
    ctx.font = "bold 24px sans-serif"
    ctx.textAlign = 'center';
    ctx.fillText(data.datasets[0].data[0], xCenter, yCenter)
    ctx.fillStyle = 'gray';
    ctx.font = "bold 12px sans-serif"
    ctx.textAlign = 'center';
    ctx.fillText('of 100 points', xCenter, yCenter + 20)
  }
}
const url = 'http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_3/';

function Component3() {
  const [responseData, setResponseData] = useState(null)
  const user = JSON.parse(localStorage.getItem("unGrayAuth"))
  useEffect(() => {
    axios
      .post(
        url,
        {},
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Basic " + user,
          },
        }
      ).then(res => {
        // console.log(JSON.parse(res.data))
        setResponseData(JSON.parse(res.data))
      })
  }, [])

  if (responseData === null) return <h5>loading...</h5>

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "8px", margin: "0px 20px" }}>
      <div>
        <Doughnut height="100px" data={data(responseData.score)} options={data.options} plugins={[gaugeText]} />
      </div>
      <div className='title'>{responseData.title}</div>
      <div className='description' >{responseData.description}</div>
      <div className='btn3'>Improve yor score</div>
    </div>
  )
}

export default Component3
