import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} 
  from 'react-router-dom';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
// import Navbar from './Components/Navbar'
// import Mainbody from './Components/Mainbody'
// import Cards from './Components/Cards'
// import ViewAllBooks from './Components/ViewAllBooks'  
// import Footer from './Components/Footer'
import Layout from './Layouts/Layout'
import Homepage from './Pages/Homepage' 
import Aboutpage from './Pages/Aboutpage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Homepage />} />
      <Route path='/About' element={<Aboutpage />} />
    </Route>,
    
  )
);
function App() {

  return (
    <>
      {/* <Navbar />
      <Mainbody />
      <Cards />
      <ViewAllBooks />
      <Footer /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App;
