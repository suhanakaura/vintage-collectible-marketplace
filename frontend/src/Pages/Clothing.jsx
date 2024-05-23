import React from 'react'
import "./css/categories.css"
import data_product from '../components/Assets/data'
import Item from '../components/Item/Item'

const Clothing = () => {
  const cloth = data_product.filter(item => item.category === 'clothes');
  return (
    <div className='category'>
    <hr />
      <div className="category-item">
        {cloth.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Clothing

