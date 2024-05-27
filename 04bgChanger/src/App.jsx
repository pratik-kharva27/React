
import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor] = useState('gray')

  return (
    <>
    <h1>code with sparrow</h1>
    <div className='w-full h-screen duration-100'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'> 
      <div className='flex flex-wrap justify-center  gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
      <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Red</button> 
      <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>Blue</button>
      <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'>yellow</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
