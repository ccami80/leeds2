
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import woman_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import vignette_banner from './Components/Assets/banner_vignette.png'
import { Navber } from './Components/Navber/Navber';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navber/>
      
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner}category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={woman_banner} category="women"/>}/>
        <Route path='/vignette' element={<ShopCategory banner={vignette_banner} category="vignette"/>}/>

        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
