import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../styles/Component1.css'

const url =
  "http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_1/";


function Component1() {
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

  if(responseData===null)return <h5>loading...</h5>


  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="left1">Dashboard</h2>
        <div className="right1" >
          <div>
            Compare to{" "}
            <span>
              <select>
                <option>Last Year</option>
              </select>
            </span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Object.keys(responseData).map(function (key, index) {
          return (
            <div
              key={key}
              className="card"
            >
              <div className="title1" >{key}</div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div className="value1">{key!=="product"&&"$"}{responseData[key]}{key!=="product"&&"k"}</div>
                {/* <div>67%</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Component1;
