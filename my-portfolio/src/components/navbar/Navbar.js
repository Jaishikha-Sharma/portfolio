import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      JAISHIKHA SHARMA
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className='nav-connect'>
        Connect with me !
        </div>
    </div>
  )
}
