import React, { useState } from 'react'
import "./navbar.scss"
const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav>
        <div className='left'>
          <a href="/" className='logo'>
            <img src="logo.png" alt="" />
            <span>Escandon Estates</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contacts</a>
          <a href="/">Agents</a>
        </div>
        <div className='right'>
          <div className={open ? "menuIcon deactivate" : "menuIcon active"}>
            <img  src="menu.png" alt="" onClick={ () => {
              setOpen(true) } } />
          </div>
          <div className={open ? "cancelIcon active" : "cancelIcon deactivate" }>
            <img src="cancel.png" onClick={() => {
                  setOpen(false)
                }} alt="" />
          </div>  
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contacts</a>
            <a href="/">Agents</a>
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
          </div>
          <a href="/">Sign In</a>
          <a href="/" className='register'>Sign Up</a>
        </div>

      
    </nav>
  )
}

export default Navbar
