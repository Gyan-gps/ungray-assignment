import axios from 'axios';
import React, { useState } from 'react'
import '../../styles/Login.css'
import {useNavigate} from 'react-router-dom'

import {decode as base64_decode, encode as base64_encode} from 'base-64';

function Login() {
  const [authDetails, setAuthDetails] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthDetails((p) => ({ ...p, [name]: value }))
  }

  const handleClick = () => {

    if(authDetails.username!=='trial'){
      return alert("Please enter valid username")
    }
    if(authDetails.password!=='assignment123'){
      return alert("Please enter valid password")
    }
    localStorage.setItem("unGrayAuth",JSON.stringify(base64_encode(authDetails.username+":"+authDetails.password)))
    navigate("/")
  }

  return (
    <div className='container'>
      <div className='auth'>
        <h2 className='head'>Auth Login</h2>
        <form>
          <label>User Name </label>
          <input type='text' value={authDetails.username} name='username' placeholder='Enter your user name' onChange={handleChange} />
          <label>Password </label>
          <input type='password' value={authDetails.password} name='password' placeholder='Enter your password' onChange={handleChange} />
          {/* <br />
          <br /> */}
          <button type='button' onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
