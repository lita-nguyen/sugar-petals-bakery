import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo"/>

      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.icon_search} alt="Search"/>
        
        <div className="navbar-search-icon">
            <img src={assets.icon_basket} alt="Basket" />
            <div className="dot"></div>
        </div>

        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
