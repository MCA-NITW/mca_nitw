import React from "react";
import IndividualUser from "./IndividualUser";
import classes from "./Alumni.module.css";

const UserList = props => {
  return (
    <div className={classes.userList}>
      {props.allUsers.map(user => (
        <IndividualUser user={user} key={user.key} />
      ))}
    </div>
  );
};

export default UserList;
