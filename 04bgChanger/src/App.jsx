
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
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'> test</div>
    </div>
    </>
  )
}

export default App
