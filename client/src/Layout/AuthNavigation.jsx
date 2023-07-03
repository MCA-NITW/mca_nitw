import React from "react";
import { Link } from "react-router-dom";
import classes from "./AuthNavigation.module.css";
import { MdFastRewind } from "react-icons/md";

const AuthNavigation = () => {
  return (
    <div className={classes.main}>
      <Link to="/">
        <MdFastRewind />
        <span> Back </span>
      </Link>
      <div className={classes.logo}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/389/534/non_2x/mca-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-vector.jpg"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default AuthNavigation;
