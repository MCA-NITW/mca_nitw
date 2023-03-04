import React from "react";
import { Link } from "react-router-dom";
import AuthNavigation from "../../Layout/AuthNavigation";
import classes from "./Authentication.module.css";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  return (
    <div>
      <AuthNavigation />
      <div className={classes.card}>
        <div style={{ marginBottom: "3rem" }}>
          <div className={classes.heading}>
            <LockIcon sx={{ color: "white" }} />
          </div>
          <Typography variant="h5">Sign In</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <div style={{ textAlign: "left" }}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="rememberMe" id="rememberMe" />
            }
            label="Remember me"
          />
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
        >
          Sign In
        </Button>
        <div className={classes.link}>
          <Link to="/auth?mode=signup" className={classes.toggle}>
            Don't have an account? Sign up here
          </Link>
        </div>
        <div>
          <div className={classes.labelText}>
            <Typography
              variant="h6-body"
              sx={{ background: "#fff", padding: "0 10px", color: "darkgrey" }}
            >
              or connect with
            </Typography>
          </div>
          <div className={classes.connectLinks}>
            <div>
              <Button>
                <img
                  src="https://hrcdn.net/fcore/assets/facebook-colored-af4249157d.svg"
                  alt="alt"
                />
              </Button>
            </div>
            <div>
              <Button>
                <img
                  src="https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg"
                  alt="alt"
                />
              </Button>
            </div>
            <div>
              <Button>
                <img
                  src="https://hrcdn.net/fcore/assets/linkedin-colored-1db195795c.svg"
                  alt="alt"
                />
              </Button>
            </div>
            <div>
              <Button>
                <img
                  src="https://hrcdn.net/fcore/assets/github-colored-1db995054b.svg"
                  alt="alt"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
