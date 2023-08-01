import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../styles/Component5.css'

const url = 'http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_5/';
function Component5() {
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

  const cal = (value)=>{
    const total = responseData.neutral+responseData.negative+responseData.positive
    return (
      Math.round(value/total*100)
    )
  }

  return (
    <div style={{background:"white",padding:"20px",borderRadius:"8px",margin:"20px"}}>
      <div className='header5'>Community feedback</div>
      <div className='remark' >{responseData.remark}</div>
      <div style={{display:"flex",gap:'1px', margin:"10px 0"}}>
      <div style={{
        width:`${cal(responseData.neutral)}%`,
        backgroundColor:"#fea7a9",
        height:"8px",
        borderRadius:"5px"
      }}></div>
      <div style={{
        width:`${cal(responseData.negative)}%`,
        backgroundColor:"#ffcd8e",
        height:"8px",
        borderRadius:"5px"
      }}></div>
      <div style={{
        width:`${cal(responseData.positive)}%`,
        backgroundColor:"#90edb5",
        height:"8px",
        borderRadius:"5px"
      }}></div>
      </div>
      <div className='bottom5'>
        <div className='card5'>
          <div className='text5'>Neutral</div>
          <div className='value5'>{responseData.neutral}</div>
        </div>
        <div className='card5'>
          <div className='text5'>Negative</div>
          <div className='value5'>{responseData.negative}</div>
        </div>
        <div className='card5'>
          <div className='text5'>Positive</div>
          <div className='value5'>{responseData.positive}</div>
        </div>
      </div>
    </div>
  )
}

export default Component5
