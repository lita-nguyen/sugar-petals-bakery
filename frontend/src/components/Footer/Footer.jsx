import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <div className="footer-content-left-title">
                <img className="footer-logo"src={assets.logo1} alt="" />
                <div className="footer-logo-texts">
                    <h1 className="footer-company-title">SUGAR PETALS</h1>
                    <h4 className="footer-tagline">Delicate bites, blooming delights</h4>
                </div>
            </div>
            <p>
                Sugar Petals Bakery offers handcrafted desserts with delicate flavors and premium ingredients. 
                We are dedicated to creating sweet and memorable moments for you and your loved ones.
            </p>
            <div className="footer-social-icons">
                <img className="social-icon" src={assets.website_icon} alt="" />
                <img className="social-icon" src={assets.facebook_icon} alt="" />
                <img className="social-icon" src={assets.instagram_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/delivery">Delivery</Link></li>
                <li><Link to="/privacy-policy">Privacy policy</Link></li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>(+84) 396 982 385</li>
                <li>nguyenlenhatlinh512@gmail.com</li>
                <li>69/68 Dang Thuy Tram Street,</li>
                <li>An Nhon Ward, Ho Chi Minh City</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>© 2023 Sugar Petals Bakery. All rights reserved.</p>
    </div>
  )
}

export default Footer
