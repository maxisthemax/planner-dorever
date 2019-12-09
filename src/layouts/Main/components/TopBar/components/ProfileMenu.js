import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";

//components
import AvatarProfileImage from "../../../../../components/AvatarProfileImage";

//material-ui
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  Hidden,
  Box,
  IconButton,
  Grid
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";

//material-icons
import { ArrowDropDown } from "@material-ui/icons";

//helpers

//assets

//styles
const useStyles = makeStyles(theme => ({
  profileButton: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    boxShadow: "none"
  }
}));

function ProfileMenu() {
  const classes = useStyles();
  const { name } = useSelector(state => state.firebase.profile);
  const firebase = useFirebase();
  const { logout } = firebase;
  //states

  //functions
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function firebaseLogout() {
    logout();
    handleClose();
  }

  return (
    <Box display="flex">
      <Hidden smDown>
        <Button
          disableFocusRipple={true}
          disableRipple={true}
          size="small"
          color="primary"
          variant="contained"
          className={classes.profileButton}
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick}
          startIcon={<AvatarProfileImage size="small" />}
          endIcon={<ArrowDropDown />}
        >
          <Hidden smDown>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
              spacing={0}
            >
              <Grid item xs={12}>
                <Typography noWrap variant="caption">
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography noWrap variant="caption">
                  Bukit Jelutong
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
        </Button>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          size="small"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AvatarProfileImage size="big" />
        </IconButton>
      </Hidden>
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
        <MenuItem onClick={handleClose}>My Profile</MenuItem>
        <MenuItem onClick={handleClose}>Add/Change Property</MenuItem>
        <MenuItem onClick={firebaseLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}

export default React.memo(ProfileMenu);
