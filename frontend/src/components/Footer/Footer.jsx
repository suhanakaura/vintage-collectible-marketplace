import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import insta_icon from '../Assets/insta-icon.webp'
import whats_icon from '../Assets/whats-icon.jpeg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" width="120px"/>
        <p>VINTAGE ESSENCE</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={insta_icon} alt="" width="20px"/>
            <img src={whats_icon} alt="" width="20px"/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
