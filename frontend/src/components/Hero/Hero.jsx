import React,{useState} from 'react'
import './Hero.css'
import cart from '../Assets/cart.jpg'
import arrow from '../Assets/arrow.png'
import bgimg from '../Assets/bgimg4.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [menu,setMenu] = useState("");

  return (
    <div className='hero'>
      <div className="hero-background" >
        <div className="hero-content">
        <h2><i>Rediscover timeless treasures and embrace the elegance of yesteryears</i></h2>
        <div className='button'>
          <Link style={{textDecoration:"none" , color:'black'}} to='/Featured'>Discover the featured ones</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero


