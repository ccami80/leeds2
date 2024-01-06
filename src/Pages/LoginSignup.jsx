import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email address'/>
          <input type="password"  placeholder='password'/>
        </div>
        <button>continue</button>
        <p className="loginsignup-login">aleray have an account? <span>login here</span></p>
        <div className="loginsignnup-agree">
          <input type="chechbox" name=''  id=''/>
          <p>by contiuning i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
