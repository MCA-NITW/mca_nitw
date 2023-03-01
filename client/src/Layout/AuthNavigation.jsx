import React from "react";
import { Link } from "react-router-dom";
import classes from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <div className={classes.main}>
      <Link to="/">
        <button>{`<- Back`}</button>
      </Link>
    </div>
  );
};

export default AuthNavigation;
