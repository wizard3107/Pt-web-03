import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar box'>
      
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="contacts">Contacts</Link>
    </div>
  )
}

export default Navbar
