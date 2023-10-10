import React, { Suspense } from "react";
import UserList from "./UserList";
import { fallback } from "../../Layout/fallback";
import { Await, useLoaderData } from "react-router-dom";
import { defer } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

import classes from "./Alumni.module.css";

const Alumni = () => {
  const data = useLoaderData();
  const allUsers = data.users;
  return (
    <section className={classes.Alumni_main}>
      <div className={classes.search}>
        <input placeholder="Search..." className={classes.search_input} />
        <button className={classes.search_btn}>
          <BiSearch />
        </button>
      </div>
      <Suspense fallback={fallback}>
        <Await resolve={allUsers}>
          {allUsers => <UserList allUsers={allUsers} />}
        </Await>
      </Suspense>
    </section>
  );
};

export default Alumni;

const userLoader = async () => {
  return [
    {
      key: 1,
      id: 1,
      name: "Sagar Gupta",
      Institute: "NIT Warangal",
      Batch: "2021-2024",
    },
  ];

  // try{
  //   const res = await fetch("http://localhost:9000/users/all");
  //   const resData = await res.json();
  //   return resData;
  // }
  // catch(err){
  //   console.log("Unable to fetch users");
  // }
};

export const loader = () => {
  return defer({
    users: userLoader(),
  });
};
