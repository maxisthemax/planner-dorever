import React from "react";

//material-ui
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonProgress: {
    color: "primary",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

function ButtonProgress({ type, loading, onClick, containName, disabled }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Button
        type={type}
        variant="contained"
        color={loading ? "default" : "primary"}
        onClick={onClick}
        disabled={loading || disabled}
      >
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
        {containName}
      </Button>
    </div>
  );
}

export default ButtonProgress;
