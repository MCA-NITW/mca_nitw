import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import classes from "./navbar.module.css";

const Nav = () => {
  return (
    <>
      <nav className={classes.main_nav}>
        <div className={classes.nav_logo}>
          <Link to="/">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/389/534/non_2x/mca-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-vector.jpg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className={classes.nav_links}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/connect"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Connect
          </NavLink>
        </div>
        <div className={classes.nav_btns}>
          <Link to="/auth?mode=login">
            <button className={classes.btn}>Sign in/Sign up</button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
