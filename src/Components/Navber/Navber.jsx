import React, { useState } from 'react'
import './Navber.css';
import { Link } from 'react-router-dom';
import rice_bowl_icon from '../Assets/menu/rice_bowl_white.svg';
import exercise_icon from '../Assets/menu/exercise_white.svg';
import apparel_icon from '../Assets/menu/apparel_white.svg';
import domino_mask_icon from '../Assets/menu/domino_mask_white.svg';
import ShopContent from './ShopContent';
import MenContent from './MenContent';
import WomenContent from './WomenContent';
import KidsContent from './KidsContent';


export const Navber = () => {
const [menu,setMenu]=useState("shop")

  // 메뉴 클릭 시 메뉴 상태 변경
  const handleMenuClick = (selectedMenu) => {setMenu(selectedMenu)};


  return (
    <nav>
    <div className='navcontainer'>

        <ul className="nav-menu">
            <li> {/* <img src={rice_bowl_icon} alt="" />  */} 리즈프로필 메뉴 </li>
            
            <li className={menu === 'shop' ? 'shop active' : 'shop'} onClick={() => handleMenuClick('shop')}>
                <Link to="/kids"> <img src={rice_bowl_icon} alt="" /> 식단 </Link> {menu==='shop'? <hr/>:<></>}
            </li>
            <li className={menu === 'men' ? 'men active' : 'men'} onClick={() => handleMenuClick('men')}>
               <Link to="/men"> <img src={exercise_icon} alt="" />운동기구</Link>{menu==="men"?<hr/>:<></>}
            </li>
            <li className={menu === 'women' ? 'women active' : 'women'} onClick={() => handleMenuClick('women')}>
                <Link to="/women"><img src={apparel_icon} alt="" />의상 </Link>{menu==='women'?<hr/>:<></>}
            </li>
            <li className={menu === 'kids' ? 'kids active' : 'kids'} onClick={() => handleMenuClick('kids')}>
               <Link to="/vignette"> <img src={domino_mask_icon} alt="" />소품</Link> {menu==='kids'?<hr/>:<></>}
            </li>
        </ul>

        <div className="nav-content">
            {menu === 'shop' && <ShopContent />}
            {menu === 'men' && <MenContent />}
            {menu === 'women' && <WomenContent />}
            {menu === 'kids' && <KidsContent />}
        </div>


  
    </div>
    </nav>
  )
}
