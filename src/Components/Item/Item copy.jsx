import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item'>
        <div className="imgcon">
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
