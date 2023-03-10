import React, { Suspense } from "react";
import UserList from "./UserList";
import { fallback } from "../../Layout/fallback";
import { Await, Outlet, useLoaderData } from "react-router-dom";
import { defer } from "react-router-dom";
import {BiSearch} from 'react-icons/bi'

import classes from "./Connect.module.css";

const Connect = () => {
  const data = useLoaderData();
  const allUsers = data.users;
  return (
    <div className={classes.connect_main}>
      <div className={classes.search}>
        <input placeholder="Search..." className={classes.search_input}/>
        <button className={classes.search_btn}>
          <BiSearch/>
        </button>
      </div>
      <Suspense fallback={fallback}>
        <Await resolve={allUsers}>
          {(allUsers) => <UserList allUsers={allUsers} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default Connect;

const userLoader = async () => {
  const res = await fetch("http://localhost:9000/users/all");
  const resData = await res.json();
  return resData.users;
};

export const loader = () => {
  return defer({
    users: userLoader(),
  });
};
