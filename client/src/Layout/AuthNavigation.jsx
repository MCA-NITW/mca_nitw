import React from "react";
import { Link } from "react-router";
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
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt="MCA NIT Warangal"
        />
      </div>
    </div>
  );
};

export default AuthNavigation;
