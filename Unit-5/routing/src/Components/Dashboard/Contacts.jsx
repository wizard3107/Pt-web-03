import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contacts = () => {
  return (
      <div className='box'>
      Contacts
      <div className='navbar'>

      <Link to="/contacts/1">Contact 1</Link>
          <Link to="/contacts/2">Contact 2</Link>
          <Link to="/contacts/new">Create Contact</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Contacts
