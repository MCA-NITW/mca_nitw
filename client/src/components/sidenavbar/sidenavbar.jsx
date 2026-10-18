import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router";
import classes from "./sidenavbar.module.css";
import { TEXT } from "../../lib/text";

const SideNavBar = props => {
  const NavLinks = props.SideNavLinks;

  return (
    <div className={classes.sidenavbar}>
      <div className={classes.sidenavbar__logo}>
        <Link to="/">
          <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt="MCA NIT Warangal"
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
          <button onClick={props.onLogout} className={classes.btn}>
            {TEXT.logOut}
          </button>
        </Link>
      </div>
    </div>
  );
};

SideNavBar.propTypes = {
  SideNavLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default SideNavBar;
