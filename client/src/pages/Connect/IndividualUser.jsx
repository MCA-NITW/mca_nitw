import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./Connect.module.css";

const IndividualUser = (props) => {
  return (
    <div className={classes.ind_card}>
      <CardMedia title={props.user.name}>
        <img src={props.user.image} alt="user" />
      </CardMedia>
      <CardContent className={classes.ind_component}>
        <Typography gutterBottom variant="h5" component="div">
          {props.user.name}
        </Typography>
        <Typography variant="body2">
          Institute: {props.user.Institute}
        </Typography>
        <Typography variant="body2">Batch: {props.user.Batch}</Typography>
      </CardContent>
      <CardActions className={classes.ind_links}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </div>
  );
};

export default IndividualUser;
