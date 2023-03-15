import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
const Navbar = () => {
  return (
    <div class ="nav">
      <h2>CSE books library</h2>
      <div class = "navbar">
        <Link to="/Books">Books</Link>
        <Link to="/About">About</Link>
        <Link to="/">Home</Link>
        </div>
      
    </div>
  
  )
}
export default Navbar
