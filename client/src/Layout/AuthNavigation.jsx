import React from "react";
import { Link } from "react-router-dom";
import classes from "./AuthNavigation.module.css";
import FastRewindIcon from '@mui/icons-material/FastRewind';

const AuthNavigation = () => {
  return (
    <div className={classes.main}>
      <Link to="/">
        <FastRewindIcon sx={{ fontSize: "25px" }} />
        <span> Back </span>
      </Link>
    </div>
  );
};

export default AuthNavigation;
