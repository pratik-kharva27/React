import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

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
      code with sparrow {color} Both...
    </div>
  )
}


export default Navbar;