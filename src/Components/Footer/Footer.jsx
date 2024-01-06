import React from 'react'
import './Footer.css';
import footer_logo from '../Assets/logo_big.png'
import { Link } from 'react-router-dom';
import pinterest_icon from '../Assets/pintester_icon.png'
import whatapp_icon from '../Assets/whatsapp_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>leeds profile</p>
        </div>

        <ul className='footer-links'>
            <li> <Link to='/'> company</Link></li>
            <li> <Link to='/product'>product</Link></li>
            <li><Link to="/cart">offies</Link></li>
            <li>about</li>
            <li>contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container"> <img src={pinterest_icon} alt="" /> </div> 
            <div className="footer-icons-container"> <img src={whatapp_icon} alt="" /></div>
            <div className="footer-icons-container"> <img src={instagram_icon} alt="" /></div>
        </div>
           <div className="footer-copyright">
            <hr />
            <p>copyright @ 2023 -all rights reserved.</p>
        </div>    
           
        
    </div>
  )
}
