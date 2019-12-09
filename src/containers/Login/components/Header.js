import React from "react";

//components

//material-ui
import { Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//helpers

//assets
import logoIcon from "../../../assets/logo.svg";

//styles
const useStyles = makeStyles(theme => ({
  header: {
    backgroundImage: "linear-gradient(to bottom, #0b51b8, #2189ff)",
    marginBottom: "auto",
    color: "white",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  logo: { marginRight: theme.spacing(1) },
  logoLabel: { marginLeft: theme.spacing(1) }
}));

function Header() {
  const classes = useStyles();

  //states

  //functions

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      direction="row"
      className={classes.header}
    >
      <Grid item className={classes.logo}>
        <Avatar alt="logoIcon" src={logoIcon} />
      </Grid>
      <Grid item className={classes.logoLabel}>
        <Typography variant="h4" component="h1" display="inline">
          JaGaWorks
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
