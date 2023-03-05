import React, { Suspense } from "react";
import UserList from "./UserList";
import { fallback } from "../../Layout/fallback";
import { Await, useLoaderData } from "react-router-dom";
import { defer } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton } from "@mui/material";

import classes from "./Connect.module.css";

const Connect = () => {
  const data = useLoaderData();
  const allUsers = data.users;
  return (
    <div className={classes.connect_main}>
      <div className={classes.search}>
        <InputBase
          placeholder="Search..."
          sx={{ width: "80%", padding: "0.5rem" }}
        />
        <IconButton
          onClick={() => {
            console.log("hello");
          }}
        >
          <SearchIcon color="white" />
        </IconButton>
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
