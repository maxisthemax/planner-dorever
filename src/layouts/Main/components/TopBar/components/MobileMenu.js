import React, { useState } from "react";

//components

//material-ui
import { Box, MenuItem, Menu, IconButton } from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";

//material-icons
import MoreIcon from "@material-ui/icons/MoreVert";

//helpers

//assets

//styles
//const useStyles = makeStyles(theme => ({}));

function MobileMenu() {
  //const classes = useStyles();

  //states

  //functions
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Box>
      <IconButton
        color="inherit"
        onClick={handleClick}
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        <MoreIcon />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleClose}>To-Do List</MenuItem>
        <MenuItem onClick={handleClose}>Calendar</MenuItem>
        <MenuItem onClick={handleClose}>Notifications</MenuItem>
      </Menu>
    </Box>
  );
}

export default React.memo(MobileMenu);
