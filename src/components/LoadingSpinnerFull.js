import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default function LoadingSpinnerFull() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={80} />
    </div>
  );
}
