import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <><Navbar /><Destinations /><Footer /></>
  )
}

export default App
