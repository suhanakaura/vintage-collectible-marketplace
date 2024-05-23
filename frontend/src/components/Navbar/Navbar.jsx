import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart.jpg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  
  const [menu,setMenu] = useState("");
  const {getTotalCartItems} = useContext(ShopContext);
  
  return (
    <div className='navbar'>
       <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" width="150px" onClick={()=>{setMenu("home")}} /></Link>
        {menu==="home"}
      </div>
    <ul className= "nav-menu">

        <li onClick={()=>{setMenu("featured")}}>
          <Link style={{ textDecoration:'none' , color:'black'}} to='/Featured'>Featured</Link>
          {menu==="featured"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("antique")}}>
          <Link style={{ textDecoration:'none' , color:'black'}} to='/Antique'>Antiques</Link>
          {menu==="antique"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("artefact")}}>
          <Link style={{ textDecoration:'none' , color:'black'}} to='/Artefact'>Artefacts</Link>
          {menu==="artefact"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("memorabilia")}}>
          <Link style={{ textDecoration:'none' , color:'black'}} to='/Memorabilia'>Memorabilia</Link>
          {menu==="memorabilia"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("book")}}>
          <Link style={{ textDecoration:'none' , color:'black'}} to='/Books'>Rare books</Link>
          {menu==="book"?<hr/>:<></>}</li>

        <li onClick={()=>{setMenu("clothing")}}>
          <Link style={{ textDecoration:'none' , color:'black'}} to='/Clothing'>Vintage Clothing</Link>
          {menu==="clothing"?<hr/>:<></>}</li>

      </ul>
      <div className="nav-login-cart">
          <Link style={{ textDecoration:'none' , color:'black'}} to='/Login'>
          <button onClick={()=>setMenu("menu")}>
            Login
          {menu==="menu"}
          </button>
          </Link>
        <Link to='/Cart'>
          <img src={cart_icon} alt="" width="55px" onClick={()=>{setMenu("cart")}}/>
          {menu==="cart"}
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
     
    </div>
  )
}

export default Navbar
