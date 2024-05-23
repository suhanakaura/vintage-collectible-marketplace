import React, { useContext } from 'react'
import './Productdisplay.css'
import star from '../Assets/star.png'
import dullstar from '../Assets/dull_star.png'
import { ShopContext } from '../../Context/ShopContext'


const Productdisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star} alt="" width="30px"/>
          <img src={star} alt="" width="30px"/>
          <img src={star} alt="" width="30px"/>
          <img src={star} alt="" width="30px"/>
          <img src={dullstar} alt="" width="30px"/>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Rs.{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            Rs.{product.new_price}
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default Productdisplay
