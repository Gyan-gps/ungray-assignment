import React, { useState } from 'react'
import '../../styles/Sidebar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const menuList = [
  {
    title: "Dashboard",
    logo: <DashboardIcon />,
    url: "/dashboard"
  },
  {
    title: "Campaigns",
    logo: <BarChartIcon />,
    url: "/campaigns"
  },
  {
    title: "Flows",
    logo: <AccountTreeIcon />,
    url: "/flows"
  },
  {
    title: "Integrations",
    logo: <PowerOutlinedIcon />,
    url: "/integrations"
  },
  {
    title: "Customers",
    logo: <ListIcon />,
    url: "/customers"
  },
]

function Sidebar() {
  const [selected, setSelected] = useState(window.location.pathname.split('/')[1]);
  const navigate = useNavigate()
  // console.log(selected)
  return (
    <div className='sidebar'>
      <div className='top'>
        <h1 className='logo' onClick={() => { setSelected("Dashboard"), navigate("/dashboard") }}
        >Salesway</h1>
        <div className='setting nav' onClick={() => { setSelected("Dashboard"), navigate("/dashboard") }}>
          <div className='navs-logo'>
            <SettingsIcon />
          </div>
          <div className='navs-title'>
            Setting
          </div>
        </div>
        <div className='team nav' onClick={() => { setSelected("Dashboard"), navigate("/dashboard") }}>
          <div className='navs-logo'>
            <PersonIcon />
          </div>
          <div className='navs-title'>
            Team
          </div>
        </div>
        <div className='menu'>Menu</div>
        <div className='lists'>
          {
            menuList.map((list) => {
              return <div key={list} onClick={() => { setSelected(list.title), navigate(list.url) }} className='nav list'
                style={{
                  backgroundColor: selected.toLowerCase() === list.title.toLowerCase() ? "#ffffff" : '#f4f5f8'
                }} >
                <div className='navs-logo'
                  style={{
                    color: selected.toLowerCase() === list.title.toLowerCase() ? "#006bf7" : '#000'
                  }}>
                  {list.logo}
                </div>
                <div className='navs-title '>
                  {list.title}
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div>
        <div className='user' >
          <div className='navs-logo'
          >
            <AccountCircleIcon />
          </div>
          <div className='username '>
            Gyan Prakash
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
