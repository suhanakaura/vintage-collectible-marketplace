import React, { useContext } from 'react'
import Hero from '../components/Hero/Hero'
import { ShopContext } from '../Context/ShopContext';



const Home = () => {
  const testSate= useContext(ShopContext);

  console.log(ShopContext.data_product);
  return (
    <div>
      <Hero/>
      
    </div>
  )
}

export default Home
