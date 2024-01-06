import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import cart_img from '../Assets/shopping_cart.svg'

export const Item = (props) => {
  return (
    <div className='item'>
        <div className="imgcon">
          <button className='goCart'> <img src={cart_img} alt="" /><img src={cart_img} alt="" /></button>
         <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        </div>
        <div className='item-info'>
          <p className='item-name'>{props.name}</p>
          <div className="item-price">
              <div className="item-price-new">
                  ${props.new_price}
              </div>
              <div className="item-price-old">
                  ${props.old_price}
              </div>
          </div>
        </div>
    </div>
  )
}
