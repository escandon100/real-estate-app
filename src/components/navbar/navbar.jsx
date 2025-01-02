import React, { useState } from 'react'
import { Link } from 'react-router'
import "./navbar.scss"
const Navbar = () => {
  const user = true
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
          {user ? (<div className='user'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John Doe</span>
            <Link className='profile' to = "/profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>

          </div>) : (
            <>
              <a href="/">Sign In</a>
              <a href="/" className='register'>Sign Up</a>
            </>
          )}
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
         
        </div>

      
    </nav>
  )
}

export default Navbar
