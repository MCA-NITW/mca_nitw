import React from "react";
import { useSearchParams } from "react-router-dom";
import Login from './Login';
import Signup from "./Signup";

const Authentication = () => {
  const [searchParams] = useSearchParams();

  const isLogin = searchParams.get('mode') === 'login';

  return (
    <div>{isLogin? <Login />: <Signup />}</div>
  );
};

export default Authentication;