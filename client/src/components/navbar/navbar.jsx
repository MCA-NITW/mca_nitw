import React from 'react'
import './navbar.css'

const Nav = () => {
    return (
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/log">Sign-in/Sign-up</a></li>
          </ul>
        </nav>
    )
}

export default Nav
