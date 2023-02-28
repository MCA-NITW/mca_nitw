import React from "react";
import classes from "./Authentication.module.css";
import { Link } from "react-router-dom";
import AuthNavigation from "../../Layout/AuthNavigation";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const Signup = () => {
  return (
    <div>
      <AuthNavigation />
      <div className={classes.main}>
        <div style={{ marginBottom: "3rem" }}>
          <div className={classes.heading}>
            <LockIcon sx={{ color: "white" }} />
          </div>
          <Typography variant="h5">Sign Up</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
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
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Confirm Password"
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
            label="I agree to this site's Terms of Service and Privacy Policy."
            sx={{
              "& .css-ahj2mt-MuiTypography-root": {
                fontSize: "0.9rem",
              },
            }}
          />
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
        >
          Sign Up
        </Button>
        <div className={classes.link}>
          <Link to="/auth?mode=login">Already have an account? LogIn here</Link>
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

export default Signup;
