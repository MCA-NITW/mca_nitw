import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import AuthNavigation from "../../Layout/AuthNavigation";
import classes from "./Authentication.module.css";

const Authentication = props => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <div>
      <AuthNavigation />
      <div className={classes.auth_container}>
        {isLogin ? (
          <Login onAuthenticated={props.onAuthenticated} />
        ) : (
          <Signup onAuthenticated={props.onAuthenticated} />
        )}
      </div>
    </div>
  );
};

Authentication.propTypes = {
  onAuthenticated: PropTypes.func.isRequired,
};

export default Authentication;
