import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import classes from "./Authentication.module.css";
import { FaFacebookF, FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { api, IS_DEMO } from "../../lib/api";
import useAuthForm from "./useAuthForm";
import { TEXT } from "../../lib/text";

const Login = props => {
  const { onSubmit, error, pending } = useAuthForm(
    api.login,
    props.onAuthenticated
  );

  return (
    <div className={classes.card}>
      <div className={classes.heading}>Login</div>
      {IS_DEMO && <p className={classes.notice}>{TEXT.demoLogin}</p>}
      <div className={classes.form}>
        <form className={classes.formGroup} onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            minLength={8}
            required
          />
          {error && (
            <p className={classes.error} role="alert">
              {error}
            </p>
          )}
          <button type="submit" disabled={pending}>
            {pending ? "Signing in..." : "Login"}
          </button>
        </form>
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

Login.propTypes = {
  onAuthenticated: PropTypes.func.isRequired,
};

export default Login;
