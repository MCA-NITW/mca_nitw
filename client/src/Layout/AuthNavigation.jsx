import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./AuthNavigation.module.css";
import FastRewindIcon from '@mui/icons-material/FastRewind';

const AuthNavigation = () => {
  return (
    <div className={classes.main}>
      <Button
        type="button"
        variant="contained"
        sx={{
          backgroundColor: "success",
          p: "0.2rem 0.5rem",
          m: "1rem",
        }}
        
      >
        <FastRewindIcon sx={{fontSize: "25px"}} />
        <Link to="/" className={classes.backBtn}>Back</Link>
      </Button>
    </div>
  );
};

export default AuthNavigation;
