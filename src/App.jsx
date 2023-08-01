import { useState } from 'react'
import './App.css'
import Navs from './navs/Navs'
import Sidebar from './components/Sidebar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  // const [path,setPath] = useState(window.location.pathname)
  // useEffect(()=>{
  //   console.log(window.location.pathname)
  //   setPath(window.location.pathname)
  // })
  return (
    <>
      <div className='app'>
        {/* {path!=="/login"&&<Sidebar/>} */}
        <Navs/>
      </div>
    </>
  )
}

export default App
