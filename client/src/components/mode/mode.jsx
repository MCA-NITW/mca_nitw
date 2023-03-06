import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import classes from './mode.module.css'
const mode = () => {
  return (
    <div className={classes.main}>
      <button
        onClick={() => {
          const bodyDOM = document.querySelector("body");
          const classes = bodyDOM.classList;
          if (classes.length === 0) {
            bodyDOM.classList.add("dark");
          } else {
            bodyDOM.classList.remove("dark");
          }
        }}
      >
        <FaLightbulb />
      </button>
    </div>
  );
}

export default mode
