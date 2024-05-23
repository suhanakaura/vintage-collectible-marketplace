import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/LoginSignup.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [input,setInput] = useState({
    email: "",
    password:"",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password){
      navigate("/");
      alert("Login Success!");
    }
    else{
      alert("Wrong email/password");
    }
  }
  return (
    <form onSubmit={handleLogin}>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Log In</h1>
        <div className="loginsignup-fields">
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
        <button>Continue</button>
        <p className="loginsignup-login">Don't have an account? <span><Link style={{textDecoration:'none', color:'#ff4141'}} to='/LoginSignup'> SignUp here </Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
    </form>
  )
}

export default Login
