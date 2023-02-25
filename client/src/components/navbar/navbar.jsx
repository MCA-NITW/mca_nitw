import React from 'react'
import classes from './navbar.module.css'

const Nav = () => {
    return (
        <nav className={classes.main_nav}>
          <div className={classes.nav_logo}>
            <h1>Logo</h1>
          </div>
          <div className={classes.nav_links}>
              <a href="/">Home</a>
              <a href="/about">About us</a>
              <a href="/contact">Contact</a>
          </div>
          <div className={classes.nav_btns}>
            <button className={classes.btn}>Sign in/Sign up</button>
          </div>
        </nav>
    )
}

export default Nav
