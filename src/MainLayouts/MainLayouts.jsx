import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/NavsItems'

const MainLayouts = () => {
  return (
    <div>
        <Navbar/>
        <Outlet></Outlet>
        <h1>Navbar</h1>
    </div>
  )
}

export default MainLayouts