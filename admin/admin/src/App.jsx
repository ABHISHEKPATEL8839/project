import React from 'react'
import Sidenav from './pages/sidenav'
import Topnav from './component/topnav'
import Footer from './footer'
import Dasbord from './dasbord'
import { Route, Routes } from 'react-router-dom'
import Cate from './cate'

const App = () => {
  return (
    <>
    <Dasbord/>
    <Sidenav/>
       <Topnav/>
       <Routes>
        




<Route path='/Cate ' element={<Cate/>}></Route>        

       </Routes>



       <Footer/>
 
    </>
  )
}

export default App