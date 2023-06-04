import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='Navbar'>
      <div className='logoNav'>
        <img src="logo.png" alt="logo" />
      </div>

      <NavLink to="/">Acceuil</NavLink>

      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  )
}

export default Navbar