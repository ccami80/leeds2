///제품을 필터링할 컨텍스트를 만든다

//1.create context를 사용하여 shopcontext를  생성한다음
//2.pros를 전달한 하나의 함수 컨텍스트 공급자를 만들고 
//컨텍스트를 사용하여 액세스하려는 데이터와 함수를 저장한 컨텍스트 값 변수를 만든 다음 
// 반환 소프트 컨텍스트 공급자를 추가하고 값 컨텍스트를 전달햇습니다
// 값 을 래핑한 다음 여기에서 props.children을 래팽했습니다.
//모든 제품 데이트를 가져오고 컨넥스트를 사용하여 다른 구성 요소에서 사용할것입니다.


import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product"; //모든제품 가져오기

export const ShopContext=createContext(null);

const ShopContextProvider=(props)=>{
    const contextValue={all_product}  //이모든 제품데이터가 이 컨텍스트 값으로 전달되므로
    return(  //shopcontext provoder를 통해 이 컨텍스트 값을 반환한다  값을 추가 하고 여기에 값 컨텍스ㅡㅌ 값을 제공함니다.

        <ShopContext.Provider value={contextValue}>   
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider