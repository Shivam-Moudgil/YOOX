import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SmNavbar } from './Components/SmallNav/Navbar'
import MainP from './Components/Pages/MainP'
import SmFooter from './Components/SmallNav/SmFooter'
import {AllRoutes} from './Components/Pages/AllRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SmNavbar />
     <AllRoutes/>
    </>
  )
}

export default App
