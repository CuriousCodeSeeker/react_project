import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './Components/Navbar'
import Mainbody from './Components/Mainbody'
import Cards from './Components/Cards'
import ViewAllBooks from './Components/ViewAllBooks'  
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Mainbody />
      <Cards />
      <ViewAllBooks />
      <Footer />
    </>
  )
}

export default App;
