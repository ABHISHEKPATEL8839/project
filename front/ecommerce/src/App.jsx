import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/footer'
import  Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Help from './pages/help'
import New from './pages/login'
import Signup from './pages/signup'
// import Profile from './pages/users/my profile'
const App = () => {
  return (
    <>
    <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='About' element={<About/>}></Route>
    <Route path='Contact' element={<Contact/>}></Route>
    <Route path='Help' element={<Help/>}></Route>
    <Route path='Signup' element={<Signup/>}></Route>
    <Route path='Login' element={<New/>}></Route>
    {/* <Route path='Login' element={<Login/>}></Route> */}
     {/* <Route path='Profile' element={<Profile/>}></Route> */}
   </Routes>
   <Footer/>
   </>
  )
}

export default App










