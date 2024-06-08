import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import { counterContext } from './contextAPI/context'



const nums = new Array(10_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 9_000_000
  }
})


function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)
  const [value, setValue] = useState(10)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(items => items.isMagical === true) // very complext calculation 
  const magical = useMemo(() => numbers.find(items => items.isMagical === true), [])

  useEffect(() => {
    console.log("3 count was change..");
    setColor(color + 1)
  }, [count])

  // first use of useRef hooks
  let a = useRef(0);
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`this is first use of useRef ${a.current}`);
  })

  // Second use of useRef hooks we don't need to dom monupulation 
  let btnRef = useRef()
  useEffect(() => {
    console.log(`this is second use of useRef `)
    btnRef.current.style.backgroundColor = 'red'

  }, [])



  return (
    <>
      <span>this is very complext calculation {magical.index}</span>

      <counterContext.Provider value={value}>

        <Navbar color={"and pratik " + color} count1={count} />

        <div>
          <h1>Vite + React</h1>
          <div className="card">
            <h1 >value :- {value}</h1>
            <h1 ref={btnRef} >count :- {count}</h1>
            <button onClick={() => {
              setCount((count) => count + 1), console.log("Add Value.."), setValue((value) => value + 1)
              if (count === 10) {
                setNumbers(new Array(10_000_000).fill(0).map((_, i) => {
                  return {
                    index: i,
                    isMagical: i === 9_000_000
                  }
                }));
              }
            }} style={{ margin: 10, color: "black", backgroundColor: "white" }}  >
              Add
            </button>

            <button onClick={() => {
              if (count === 0) {
                setCount(0)
              } else {
                setCount((count) => count - 1),
                  setValue((value) => value - 1)
              }
              if (count == 0) {
                console.log(`Value is Already ( ${count} ) ..`)
              } else console.log("Remove Vlaue..")
            }} style={{ margin: 10, color: "black", backgroundColor: "white" }}>
              Remove
            </button>

            <button style={{ margin: 10, color: "black", backgroundColor: "white" }} onClick={() => { btnRef.current.style.display = "none" }}>disable useRef Hook </button>
            <button style={{ margin: 10, color: "black", backgroundColor: "white" }} onClick={() => { btnRef.current.style.display = "" }}> enable useRef Hook </button>
          </div>
          <p className="read-the-docs">
            Click on Add and Remove to change value
          </p>
        </div>
      </counterContext.Provider>
    </>
  )
}

export default App
