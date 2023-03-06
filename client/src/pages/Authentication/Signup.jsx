import React from "react";
import classes from "./Authentication.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Signup = () => {
  return (
    <div className={classes.card}>
      <div className={classes.heading}>Sign Up</div>
      <div className={classes.form}>
        <div className={classes.formGroup}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>
        </div>
      </div>
      <div className={classes.link}>
        <Link to="/auth?mode=login">Already have an account? Login</Link>
      </div>
      <div className={classes.loginwith}>
        <div className={classes.loginwithtext}>
          <hr />
          <span>Or SignUp With</span>
          <hr />
        </div>
        <div className={classes.loginwithicons}>
          <div className={classes.loginwithicon}>
            <FaFacebookF />
          </div>
          <div className={classes.loginwithicon}>
            <FaGoogle />
          </div>
          <div className={classes.loginwithicon}>
            <FaGithub />
          </div>
          <div className={classes.loginwithicon}>
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
