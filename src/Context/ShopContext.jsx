import React, { createContext, useState } from "react";

import all_product_data from "../Components/Assets/all_product"; // 데이터 가져오기
export const ShopContext = createContext(null);
 //장바구니
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product_data.length+1; index++) {
       cart[index]=0
    }
    return cart;
  }


const ShopContextProvider = (props) => {
  const [all_product] = useState(all_product_data); // 실제 데이터를 가져와서 useState를 이용해 상태로 관리합니다.
  const itemsPerPage = 15; // 페이지당 아이템 수
  const totalPages = Math.ceil(all_product.length / itemsPerPage); // 전체 페이지 수

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = all_product.slice(indexOfFirstItem, indexOfLastItem);
  
  const [cartItems,setCartItems]=useState(getDefaultCart()) //장바구니

  //장바구니
  const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    // console.log(cartItems)
  }
//장바구니
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
//장바구니
  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for (const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo=all_product.find((product)=>product.id===Number(item))
            totalAmount+=itemInfo.new_price*cartItems[item]
        }
    }
    return totalAmount
  }

const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item]
        }
    }
    return totalItem
}
const contextValue = {
    all_product,
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
    cartItems,//장바구니
    addToCart,//장바구니
    removeFromCart,//장바구니
    getTotalCartAmount,//장바구니
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
