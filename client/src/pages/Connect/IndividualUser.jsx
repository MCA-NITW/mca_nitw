import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const IndividualUser = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "3rem",
        width: "30%",
        borderRadius: "0 2rem 0 2rem",
      }}
    >
      <CardMedia sx={{ height: 140 }} title={props.user.name}>
        <img
          src={props.user.image}
          alt="user-image"
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Institute: {props.user.Institute}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Batch: {props.user.Batch}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default IndividualUser;
