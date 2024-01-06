import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


export const CartItems = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>product</p>
            <p>title</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
            <p>remove</p>
        </div>
        <hr />
        
            {all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    
                    return <div><div className="cartitems-format cartitems-format-main">
                    <img src={e.image} className='carticon-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>{e.new_price}원</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}원</p>
                    <img className='cartitems-remove-icon' src={remove_icon}onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                </div>
                }
            return null;
            })}
            <hr />
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals </h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>

                        <hr />
                        <div className="cartitems-total-item">
                            <p>shipping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>

                        <button>proceed to checkout</button>
                    </div>
                    </div>
           

                    <div className="cartitems-promocode">
                        <p>if you have a promo code, enter it here</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder="promo code"/>
                            <button>submit</button>
                        </div>
                    </div>
                </div>
            
        
    </div>
  )
}
