import React from 'react'
import Sidebar from '../../components/Sidebar'
import Component1 from '../../components/Component1'
import Component2 from '../../components/Component2'
import Component3 from '../../components/Component3'
import Component4 from '../../components/Component4'
import Component5 from '../../components/Component5'
import Component6 from '../../components/Component6'

import {Grid} from '@mui/material'

function Dashboard() {
  return (
    <div className='' style={{display:'flex',width:"100%"}} >
      <Grid container gap={2} sx={{margin:"15px",}} >
        <Grid item lg={8.5} sm={12} sx={{background:"white",padding:"20px",borderRadius:"8px"}}>
          <Component1 />
          <Component2 />
          <Component6 />
        </Grid>
        <Grid item lg={3} sm={12} >
          <Component3 />
          <Component4 />
          <Component5 />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard

