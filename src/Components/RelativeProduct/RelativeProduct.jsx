import React from 'react'
import './RelativeProduct.css'
import data_product from '../Assets/data'
import { Item } from '../Item/Item'

export const RelativeProduct = () => {
  return (
    <div className='relativeProduct'>
        <h1>함께보면 좋은 상품</h1>
        <hr />
        <div className="relativeProduct-item">
            {data_product.map((item,i)=>{
                return <Item key={i} name={item.name} id={item.id} image={item.image} 
                imageDepth={item.image_depth}
                new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}
