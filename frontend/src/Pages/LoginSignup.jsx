import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './css/LoginSignup.css'
const LoginSignup = () => {
  const navigate = useNavigate();
  const [input,setInput] = useState({
    name : "",
    email: "",
    password:"",
  });

  // to store value in local storage
  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/Login");
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input 
            name="name" 
            value={input.name}  
            onChange={(e)=>
              setInput({
                ...input,
                [e.target.name]:e.target.value,
              })
            }
            type="text" 
            placeholder='Your Name'/>
          <input 
            type="email" 
            name="email" 
            value={input.email}  
            onChange={(e)=>
              setInput({
                ...input,
                [e.target.name]:e.target.value,
              })
            }
            placeholder='Email Address' />
          <input 
            type="password"
            name="password" 
            value={input.password}  
            onChange={(e)=>
              setInput({
                ...input,
                [e.target.name]:e.target.value,
              })
            } 
            placeholder='Password' />
        </div>
        <button type="submit">Continue</button>
        <p className="loginsignup-login">Already have an account? <span><Link style={{textDecoration:'none', color:'#ff4141'}} to='/Login'> Login here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
    </form>
  )
}

export default LoginSignup
