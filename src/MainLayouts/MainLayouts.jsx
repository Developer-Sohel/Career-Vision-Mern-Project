import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/NavsItems'

const MainLayouts = () => {
  return (
    <div>
        <Navbar/>
        <Outlet></Outlet>
        
    </div>
  )
}

export default MainLayouts