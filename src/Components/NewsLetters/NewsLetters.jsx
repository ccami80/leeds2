import React from 'react'
import './NewsLetters.css'

export const NewsLetters = () => {
  return (
    <div className='newsletter'>
        <h1>get exclusive offers on your email</h1>
        <p>subscribe to our newsletter and stay updated</p>

        <div>
            <input type="email" placeholder='your email id' />
            <button>subscribe</button>
        </div>
    </div>
  )
}
