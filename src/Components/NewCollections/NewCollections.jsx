import React from 'react'
import './NewCollections.css';
import new_collections from '../Assets/new_collections'
import { Item } from '../Item/Item';

export const NewCollections = () => {
  return (
    <div className='newcollection'>
        <h1>newcollections</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{
                return <Item key={i} name={item.name} id={item.id} image={item.image} 
                imageDepth={item.image_depth}
                new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
