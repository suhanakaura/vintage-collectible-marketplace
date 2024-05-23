import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Layout.css'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <div className="child">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
