import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={assets.logo} alt="Logo" className="logo"/>
        <div className="site-info">
          <h1 className="site-name">Sugar Petals</h1>
          <p className="site-slogan">Delicate bites, blooming delights</p>
        </div>
      </div>
          
      <ul className='navbar-menu'>
        <li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</li>
        <li className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</li>
        <li className={menu === "Mobile" ? "active" : ""} onClick={() => setMenu("Mobile")}>Mobile-app</li>
        <li className={menu === "Contact" ? "active" : ""} onClick={() => setMenu("Contact")}>Contact us</li>
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
