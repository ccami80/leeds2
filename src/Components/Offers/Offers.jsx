import React from 'react';
import  './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
       <div className="offers-left">
        <h1>exclusive</h1>
        <h1>offerrs for you</h1>
        <p>only on best sellars products</p>
        <button>check now</button>
       </div>
       <div className="offers-right">
        <img src={exclusive_image} alt="" />
       </div>
    </div>
  )
}
