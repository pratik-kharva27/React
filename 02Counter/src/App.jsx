import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = ()=>{
    setCount( (precount) => precount + 1 )
    // setCount is a function and allow arrow function in said for set count vlaue
    // first time arrow function run and again second time run new arrow 

    setCount( (precount) => precount + 1 ) //again next time run for incres count fist time
    setCount( (precount) => precount + 1 ) //again next time run for incres count second time

    // bot setCount incres value only one time cause setCount take value one time 
    // setCount(count+1)
    // setCount(count+1)
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
