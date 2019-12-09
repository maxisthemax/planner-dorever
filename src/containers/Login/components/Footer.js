import React from "react";

//components

//material-ui
import { Container, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//helpers

//assets

//styles
const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: "center",
    padding: theme.spacing(1, 1),
    marginTop: "auto",
    color: "white"
  }
}));

function Footer() {
  const classes = useStyles();

  //states

  //functions

  return (
    <Container maxWidth="sm" className={classes.footer}>
      <Typography variant="body2">
        © {new Date().getFullYear()}
        {"."}
        <Link color="inherit" href="http://www.redideasholdings.com/">
          Red Ideas Sdn. Bhd
        </Link>
      </Typography>
    </Container>
  );
}

export default Footer;
