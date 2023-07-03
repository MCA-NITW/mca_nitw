import React from "react";
import IndividualUser from "./IndividualUser";
import classes from "./Connect.module.css";

const UserList = props => {
  return (
    <div className={classes.userList}>
      {props.allUsers.map(user => (
        <IndividualUser user={user} />
      ))}
    </div>
  );
};

export default UserList;
