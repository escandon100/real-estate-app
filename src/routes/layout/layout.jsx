import React from 'react'
import Navbar from '../../components/navbar/navbar'
import "./layout.scss"
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='layout'>
      <div className="navbar">
       <Navbar/>
      </div>
      <div className="content">
       <Outlet/>
      </div>
    </div>
  )
}

export default Layout