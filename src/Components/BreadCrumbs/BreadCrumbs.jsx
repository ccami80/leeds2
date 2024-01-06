import React from 'react';
import './BreadCrumbs.css';
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const BreadCrumbs = (props) => {
    const {product}=props
  return (
    <div className="breadcrum_container">
    <div className='breadcrum'>
        home <img src={arrow_icon} alt="" />shop<img src={arrow_icon} alt="" />{product.category}<img src={arrow_icon} alt="" /><div className="productName">{product.name}</div>
    </div>
    </div>
  )
}