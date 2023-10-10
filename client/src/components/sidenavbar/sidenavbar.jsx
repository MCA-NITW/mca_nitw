import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./sidenavbar.module.css";

const SideNavBar = props => {
  const NavLinks = props.SideNavLinks;

  const setisloggedin = () => {
    props.setisloggedin(false);
  };

  return (
    <div className={classes.sidenavbar}>
      <div className={classes.sidenavbar__logo}>
        <Link to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/389/534/non_2x/mca-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-vector.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div className={classes.sidenavbar__links}>
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
      <div className={classes.sidenavbar__btns}>
        <Link to="/">
          <button onClick={setisloggedin} className={classes.btn}>
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SideNavBar;
