import React from "react";
import { MdDarkMode } from "react-icons/md";
import classes from "./mode.module.css";
const mode = props => {
  return (
    <div className={classes.main}>
      <button
        onClick={() => {
          const bodyDOM = document.querySelector("body");
          const classes = bodyDOM.classList;
          if (classes.length === 0) {
            props.setMode("dark");
            bodyDOM.classList.add("dark");
          } else {
            props.setMode("light");
            bodyDOM.classList.remove("dark");
          }
        }}
      >
        <MdDarkMode />
      </button>
    </div>
  );
};

export default mode;
