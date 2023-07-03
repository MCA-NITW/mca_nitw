import React from "react";
import { useSearchParams } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import AuthNavigation from "../../Layout/AuthNavigation";
import classes from "./Authentication.module.css";

const Authentication = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <div>
      <AuthNavigation />
      <div className={classes.auth_container}>
        {isLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default Authentication;
