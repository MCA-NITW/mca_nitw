import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Authentication.module.css";
import { FaFacebookF, FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Login = props => {
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    props.setisloggedin(true);
    navigate("/");
  };

  return (
    <div className={classes.card}>
      <div className={classes.heading}>Login</div>
      <div className={classes.form}>
        <div className={classes.formGroup}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={onSubmitHandler} type="submit">
            Login
          </button>
        </div>
      </div>
      <div className={classes.link}>
        <Link to="/auth?mode=signup">Don't have an account? Sign Up</Link>
      </div>
      <div className={classes.link}>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div className={classes.loginwith}>
        <div className={classes.loginwithtext}>
          <hr />
          <span>Or Login With</span>
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

export default Login;
