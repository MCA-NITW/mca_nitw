import React from 'react'
import { Link } from 'react-router-dom';
import classes from './signinup.module.css'

const signinup = () => {
  return (
    <div className={classes.main}>
      <div className={classes.bckbtn}>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div className={classes.signinup}>
        <div className={classes.signin}>
          <h1>Sign In</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>

          <div className={classes.or}>
            <hr />
            <p>OR</p>
            <hr />
          </div>

          <div className={classes.google}>
            <button>Sign In with Google</button>
          </div>

          <div className={classes.forgot}>
            <Link to="/forgotpassword">
              <p>Forgot Password?</p>
            </Link>
            <Link to="/signup">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
        <div className={classes.signup}>
          <h1>Sign Up</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
          </form>

          <div className={classes.or}>
            <hr />
            <p>OR</p>
            <hr />
          </div>

          <div className={classes.google}>
            <button>Sign Up with Google</button>
          </div>
          <div className={classes.forgot}>
            <Link to="/forgotpassword">
              <p>Forgot Password?</p>
            </Link>

            <Link to="/signin">
              <p>Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signinup
