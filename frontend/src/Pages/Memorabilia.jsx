import React from 'react'
import "./css/categories.css"
import data_product from '../components/Assets/data'
import Item from '../components/Item/Item'

const Memorabilia = () => {
  const memo = data_product.filter(item => item.category === 'memorabilia');
  return (
    <div className='category'>
    <hr />
      <div className="category-item">
        {memo.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Memorabilia

