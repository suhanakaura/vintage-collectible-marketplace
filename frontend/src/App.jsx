import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Featured from './Pages/Featured'
import Antique from './Pages/Antique'
import Artefact from './Pages/Artefact'
import Memorabilia from './Pages/Memorabilia'
import Books from './Pages/Books'
import Clothing from './Pages/Clothing'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Login from './Pages/Login';
import Layout from './components/Layout/Layout';
function App() { 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Featured' element={<Featured/>}/>
        <Route path='/Antique' element={<Antique/>}/>
        <Route path='/Artefact' element={<Artefact/>}/>
        <Route path='/Memorabilia' element={<Memorabilia/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Clothing' element={<Clothing/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>
      </Layout>
      </BrowserRouter>
      
    </>
  )
}

export default App
