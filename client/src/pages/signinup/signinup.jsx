import React from 'react'
import classes from './signinup.module.css'

const signinup = () => {
  return (
    <div className={classes.page} >
      <div className={classes.page1}>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        <h1>Sign up</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign up</button>
        </form>
      </div>
      
    </div>
  );
}

export default signinup
