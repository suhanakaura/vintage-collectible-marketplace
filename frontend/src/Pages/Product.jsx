import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import Productdisplay from '../components/ProductDisplay/Productdisplay';
import data_product from '../components/Assets/data'
import Description from '../components/Description/Description';

const Product = () => {
  const {productId} = useParams();
  const product = data_product.find((e)=>e.id === Number(productId))
  
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Description/>
    </div>
  )
}

export default Product
