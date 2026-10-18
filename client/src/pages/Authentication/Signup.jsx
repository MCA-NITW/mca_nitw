import React from "react";
import classes from "./Authentication.module.css";
import { Link } from "react-router";
import { FaFacebookF, FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { api, IS_DEMO } from "../../lib/api";
import useAuthForm from "./useAuthForm";
import { TEXT } from "../../lib/text";

const passwordsMatch = values =>
  values.password === values.confirmPassword ? "" : "Passwords do not match";

const Signup = props => {
  const { onSubmit, error, pending } = useAuthForm(
    ({ name, email, batch, password }) =>
      api.signup({ name, email, batch, password }),
    props.onAuthenticated,
    passwordsMatch
  );

  return (
    <div className={classes.card}>
      <div className={classes.heading}>Sign Up</div>
      {IS_DEMO && <p className={classes.notice}>{TEXT.demoSignup}</p>}
      <div className={classes.form}>
        <form className={classes.formGroup} onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
          <input
            type="text"
            name="batch"
            placeholder="Batch (e.g. 2024-2026)"
            maxLength={20}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            minLength={8}
            maxLength={72}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            autoComplete="new-password"
            required
          />
          {error && (
            <p className={classes.error} role="alert">
              {error}
            </p>
          )}
          <button type="submit" disabled={pending}>
            {pending ? "Creating account..." : "Sign Up"}
          </button>
        </form>
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
