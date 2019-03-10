import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ numberDataEntries }) => {
  const { users, things } = numberDataEntries
  return (
    <div>
      <NavLink to="/users" id="leftnavlink">
        users {users}
      </NavLink>
      <NavLink to="/things">things {things}</NavLink>
    </div>
  )
}

export default Navbar
