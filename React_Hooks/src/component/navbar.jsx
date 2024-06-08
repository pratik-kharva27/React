import React, { useEffect } from 'react'
import Button from './button.jsx'


const Navbar = ({ color,count1 }) => {  

  useEffect(() => {
    // console.log("1 color was change...")
  }, [color])

  // case 1: run on every render
  useEffect(() => {
    // console.log(" sparrow i will run every render... ")
  })

  // case 2: run on first render
  useEffect(() => {
    // console.log("2 welcome to my page");
  }, [])

  // case 3: run only when certain values change
  useEffect(() => {
    // console.log("3 count was change..");
  }, [color])

  // example of cleanup function
  useEffect(() => {
    console.log("cleanup function ")
    return () => {
      console.log("component was  not declar sparrow+++++++++++ ")
    }
  }, [])

  return (
    <div>
      <Button count2={count1}/>
      code with sparrow {color} Both...  using props
    </div>
  )
}


export default Navbar;