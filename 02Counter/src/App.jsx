import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = ()=>{
    setCount(count+1)
  }
  
  const removeValue = ()=>{
    if(count == 0 ){
      setCount( count = 0)
    }else{
      setCount(count-1)
    }
  }

  return (
    <>
    <h1>code with sparrow </h1>
    <h2>counter Value {count}</h2>
    <button onClick={addValue}>add value</button>
    <button onClick ={removeValue}>remove value</button>
    </>
  )
}

export default App
