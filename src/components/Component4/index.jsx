import React, { useEffect, useState } from "react";
import '../../styles/Component4.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
    labels: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: false
    },
    y: {
      ticks: {
        callback: function (value, index, ticks) {
          return  Math.round(value/1000) + "k";
        }
      }
    }
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Web sales",
      data: labels.map(() => Math.round(Math.random() * 1000)),
      borderColor: "#0068f7",
      backgroundColor: "#0068f7",
    },
    {
      label: "Online selling",
      data: labels.map(() => Math.round(Math.random() * 1000)),
      borderColor: "#b1effe",
      backgroundColor: "#b1effe",
    },
  ],
};

const url =
  "http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_4/";
function Component4() {
  const [responseData, setResponseData] = useState(null);
  const user = JSON.parse(localStorage.getItem("unGrayAuth"))
  useEffect(() => {
    axios
      .post(
        url,
        {},
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Basic "+user,
          },
        }
      )
      .then((res) => {
        // console.log(JSON.parse(res.data));
        setResponseData(JSON.parse(res.data));
      });
  }, []);

  if (responseData === null) return <h5>loading...</h5>

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "8px", margin: "20px" }}>
      <div className="header4">Customers by Device </div>
      <div>
        <Line options={options} data={data} />
      </div>
      <div className="bottom4">
        <div className="card4">
          <div className="title4">
            <div className="text4">Web sales</div>
            <div className="box4" style={{background:"#0068f7"}}></div>
          </div>
          <div className="value4">{responseData.web_sales}%</div>
        </div>
        <div className="card4">
          <div className="title4">
            <div className="text4">Offline selling</div>
            <div className="box4" style={{background:"#b1effe"}}></div>
          </div>
          <div className="value4">{responseData.offline_selling}%</div>
        </div>
      </div>
    </div>
  );
}

export default Component4;
