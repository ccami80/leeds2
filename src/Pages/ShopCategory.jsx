import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item';


export const ShopCategory = (props) => {
    const {all_product}=useContext(ShopContext)

  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexsort">
            <p> <span>showing 1-12</span> out ot 36 product </p>
            <div className="shopcategory-sort"> sort by <img src={dropdown_icon} alt="" /> </div>
        </div>

        <div className="shopcategory-product">
            {all_product.map((item,i)=>{
               if(props.category===item.category){
                return <Item key={i} name={item.name} id={item.id} image={item.image} 
                imageDepth={item.image_depth}
                new_price={item.new_price} old_price={item.old_price}/>
               }else{
                return null
               }
            })}
        </div>
        <div className="shopcategory-loadmore">explore more</div>
    </div>
  )
}
