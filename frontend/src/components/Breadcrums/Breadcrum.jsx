import React from 'react'
import './Breadcrum.css'
import arrow from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow} alt="" width="10px"/> {product.category} <img src={arrow} alt="" width="10px"/> {product.name}
    </div>
  )
}

export default Breadcrum
