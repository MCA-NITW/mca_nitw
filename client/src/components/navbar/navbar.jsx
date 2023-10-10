import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import classes from "./navbar.module.css";

const Nav = props => {
  const NavLinks = props.navLinks;
  const isloggedin = props.isloggedin;
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
          {NavLinks.map(link => {
            return (
              <NavLink
                key={link.id}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
        <div className={classes.nav_btns}>
          {isloggedin ? (
            <Link to="/profile">
              <button className={classes.btn}>Profile</button>
            </Link>
          ) : (
            <Link to="/auth?mode=login">
              <button className={classes.btn}>Sign in/Sign up</button>
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
