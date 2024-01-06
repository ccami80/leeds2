import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { BreadCrumbs } from '../Components/BreadCrumbs/BreadCrumbs';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { Description } from '../Components/Description/Description';
import { RelativeProduct } from '../Components/RelativeProduct/RelativeProduct';

export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();

  const product=all_product.find((e)=>e.id===Number(productId)) //모르겠음
  return (
    <>
      <BreadCrumbs product={product}/>
      <ProductDisplay product={product}/>
      <RelativeProduct/>
      <Description/>
      
    </>
  )
}
