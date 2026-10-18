import React from "react";
import classes from "./Alumni.module.css";
import { Link } from "react-router";

const initials = name =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join("");

const IndividualUser = props => {
  const { user } = props;
  const role = [user.designation, user.company].filter(Boolean).join(" at ");

  return (
    <div className={classes.ind_card}>
      <div title={user.name} className={classes.image}>
        {user.image ? (
          <img src={user.image} alt={user.name} />
        ) : (
          <div className={classes.avatar} aria-hidden="true">
            {initials(user.name)}
          </div>
        )}
      </div>
      <div className={classes.ind_component}>
        <div className={classes.ind_username}>{user.name}</div>
        {role && <div className={classes.ind_role}>{role}</div>}
        <div className={classes.ind_institute}>Institute: {user.institute}</div>
        {user.batch && (
          <div className={classes.ind_batch}>Batch: {user.batch}</div>
        )}
        {user.location && (
          <div className={classes.ind_batch}>{user.location}</div>
        )}
        {user.linkedin && (
          <a
            href={user.linkedin}
            target="_blank"
            rel="noreferrer"
            className={classes.ind_linkedin}
          >
            LinkedIn
          </a>
        )}
      </div>
      <div className={classes.ind_links}>
        <button className={classes.btn}>Share</button>
        <Link to="/profile" className={classes.btn}>
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default IndividualUser;
