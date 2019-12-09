import React from "react";

//components

//material-ui
import { Avatar, Container, Box, Link } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

//helpers

//assets
import logoIcon from "../../../../../assets/logo.svg";

//styles
// const useStyles = makeStyles(theme => ({}));

function LogoAndLabel() {
  //const classes = useStyles();
  //const preventDefault = event => event.preventDefault();
  //states

  //functions

  return (
    <Container style={{ display: "contents" }}>
      <Link href="/">
        <Avatar alt="logoIcon" src={logoIcon} />
      </Link>
      <Box m={0.5} />
      <Link href="/" variant="h5" color="inherit" underline="none">
        JaGaWorks
      </Link>
    </Container>
  );
}

export default LogoAndLabel;
