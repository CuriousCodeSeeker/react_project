import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './Components/Navbar'
import Mainbody from './Components/Mainbody'
import Cards from './Components/Cards'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Mainbody />
      <Cards />
    </>
  )
}

export default App;
