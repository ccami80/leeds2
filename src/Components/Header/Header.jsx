import React, { useContext } from 'react'
import './Header.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';



export const Header = () => {
const {getTotalCartItems}=useContext(ShopContext)
  return (
    <header>
    <div className='navbar'>
        <Link to="/">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>leeds profile</p>
        </div>
        </Link>

    

        <div className="nav-login-cart">
        <Link to="/login"><button>login</button></Link>
            <div className='cartContainer'>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            
        </div>
    </div>
    </header>
  )
}





















