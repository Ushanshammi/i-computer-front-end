import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCard name="flowers" price="10000.00"/>
   

    </>
  )
}

export default App
