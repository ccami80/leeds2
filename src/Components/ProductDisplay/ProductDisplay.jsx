// ProductDisplay.js
import React, { useState, useEffect, useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart}=useContext(ShopContext); //장바구니
  const [currentImage, setCurrentImage] = useState(product.image);

  const handleImageChange = (newImage) => {
    setCurrentImage(newImage);
  };

  useEffect(() => {
    setCurrentImage(product.image);
  }, [product]);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={currentImage} alt="Main" />
        </div>
        <div className="productdisplay-img-list">
          {product.image_depth.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleImageChange(image)}
              onMouseOver={() => handleImageChange(image)}
            />
          ))}
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-decription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem rem atque reprehenderit accusantium doloremque magni, quia suscipit fugiat alias odio pariatur saepe sed laboriosam ut voluptatibus eveniet maxime, explicabo odit.
        </div>
        <div className="productdisplay-right-sizes">
          <h1>select size</h1>
          <div className="productdisplay-right-size">
            <div>s</div>
            <div>m</div>
            <div>l</div>
            <div>xl</div>
            <div>xxl</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>add to cart</button>
        <p className="productdisplay-right-category"><span>category :</span> woman, t-shirt,crop top</p>
        <p className="productdisplay-right-category"><span>tag :</span> moden, latest</p>
      </div>
    </div>
  );
};

// 나머지 코드
// ... 다른 파일에서 가져와서 ProductDisplay 컴포넌트와 함께 사용하는 부분들 ...
