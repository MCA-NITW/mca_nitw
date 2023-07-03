import React from "react";
import classes from "./Connect.module.css";
import { Link } from "react-router-dom";
import Profile from "../Fullprofile/profile";

const IndividualUser = props => {
  return (
    <div className={classes.ind_card}>
      <div title={props.user.name} className={classes.image}>
        <img src={props.user.image} alt="user" />
      </div>
      <div className={classes.ind_component}>
        <div className={classes.ind_username}>{props.user.name}</div>
        <div className={classes.ind_institute}>
          Institute: {props.user.Institute}
        </div>
        <div className={classes.ind_batch}>Batch: {props.user.Batch}</div>
      </div>
      <div className={classes.ind_links}>
        <button className={classes.btn}>Share</button>
        <Link
          to="/profile"
          className={classes.btn}
          onClick={() => {
            <Profile />;
          }}
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default IndividualUser;
