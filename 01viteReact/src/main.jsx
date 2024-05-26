import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sparrow from './sparrow.jsx'






// const anotherElement = (
//   <a href="https://google.com" target='_blank'> click to visit google </a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    <Sparrow />
  </React.StrictMode>,
  // anotherElement
)
