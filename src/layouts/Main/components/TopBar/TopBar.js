import React from "react";

//components
import LogoAndLabel from "./components/LogoAndLabel";
import SearchBar from "./components/SearchBar";
import ProfileMenu from "./components/ProfileMenu";
import MobileMenu from "./components/MobileMenu";

//material-ui
import { AppBar, Toolbar, Hidden, IconButton, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//material-icons
import MenuIcon from "@material-ui/icons/Menu";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import DateRangeIcon from "@material-ui/icons/DateRange";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

//helpers

//assets

//styles
const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

function TopBar({ onSidebarOpen }) {
  const classes = useStyles();

  //states

  //functions

  return (
    <AppBar className={classes.root}>
      <Toolbar disableGutters={true}>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <Box m={1} />
          <LogoAndLabel />
        </Hidden>
        <SearchBar />
        <ProfileMenu />
        <Hidden smDown>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <FormatListBulletedIcon />
          </IconButton>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <DateRangeIcon />
          </IconButton>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <NotificationsNoneIcon />
          </IconButton>
        </Hidden>

        <Hidden mdUp>
          <MobileMenu />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
