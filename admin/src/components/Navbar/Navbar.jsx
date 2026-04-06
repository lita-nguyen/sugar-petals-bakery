import React from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img className='logo' src={assets.logo} alt="" />
        <div className="site-info">
          <h1 className="site-name">Sugar Petals</h1>
          <p className="site-slogan">Admin Panel</p>
        </div>
      </div>

      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
