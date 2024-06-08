import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './component/navbar'


function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  useEffect(() => {
    // console.log("3 count was change..");
    // setColor(color + 1)
  },[count])

// first use of useRef hooks
  let a = useRef(0);
  useEffect(()=>{
    a.current = a.current + 1;
    console.log(`this is first use of useRef ${a.current}`);
  })

// Second use of useRef hooks we don't need to dom monupulation 
let btnRef = useRef()
  useEffect(()=>{
    console.log(`this is second use of useRef `)
    btnRef.current.style.backgroundColor = 'red'
  },[])
  

  return (
    <>
    {/* <Navbar color = {"and pratik " + color} /> */}
    
      <div>
        <h1>Vite + React</h1>
        <div className="card">
          <h1 ref = {btnRef} >{count}</h1>
          <button  onClick={() => { setCount((count) => count + 1), console.log("Add Value..") }} style={{margin:10, color:"black", backgroundColor:"white"}}  >
            Add
          </button>

          <button  onClick={() => {
            if (count === 0) {
              setCount(0)
            } else {
              setCount((count) => count - 1)
            }
            if (count == 0) {
              console.log(`Value is Already ( ${count} ) ..`)
            } else console.log("Remove Vlaue..")
          }} style={{margin:10, color:"black", backgroundColor:"white"}}>
            Remove
          </button>

          <button style={{margin:10,color:"black", backgroundColor:"white" }} onClick={()=>{ btnRef.current.style.display = "none"}}>disable </button>
          <button style={{margin:10,color:"black", backgroundColor:"white" }} onClick={()=>{ btnRef.current.style.display = ""}}> enable  </button>
        </div>
        <p className="read-the-docs">
          Click on Add and Remove to change value
        </p>
      </div>
    </>
  )
}

export default App
