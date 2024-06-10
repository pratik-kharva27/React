import { useState } from 'react'
import './App.css'
import CurrencyConverter from './component/currency'
import Stopwatch from './component/stop_watch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CurrencyConverter />
      <Stopwatch />
      
    </>
  )
}

export default App
