import React from "react";

//components

//material-ui
import { InputBase } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";

//material-icons
import SearchIcon from "@material-ui/icons/Search";

//helpers

//assets

//styles
const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "100%"
    },
    display: "inline-flex",
    height: "44px"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  searchButton: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

function SearchBar() {
  const classes = useStyles();

  //states

  //functions

  return (
    <div className={classes.search}>
      <InputBase
        fullWidth={true}
        startAdornment={
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        }
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </div>
  );
}

export default SearchBar;
