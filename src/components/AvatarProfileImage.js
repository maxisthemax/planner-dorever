import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
//components

//material-ui
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//material-icons

//helpers
import { getDownloadUrlPath } from "../helpers/firebaseHelpers";

//assets
import profilePlaceholder from "../assets/images/profile-placeholder.png";

//styles
const useStyles = makeStyles(theme => ({
  profileAvatarSmall: {
    width: 32,
    height: 32
  },
  profileAvatarBig: { width: 36, height: 36 }
}));

function AvatarProfileImage({ size }) {
  const classes = useStyles();
  const { image_url } = useSelector(state => state.firebase.profile);

  //states
  const [profileImage, setProfileImage] = useState(profilePlaceholder);

  let avatarClassName = {};
  if (size === "small") avatarClassName = classes.profileAvatarSmall;
  else if (size === "big") avatarClassName = classes.profileAvatarBig;

  useMemo(() => {
    getDownloadUrlPath(image_url, (url, err) => {
      if (!err) {
        setProfileImage(url);
      } else {
        setProfileImage(profilePlaceholder);
      }
    });
  }, [image_url, setProfileImage]);

  //functions

  return <Avatar className={avatarClassName} src={profileImage}></Avatar>;
}

export default React.memo(AvatarProfileImage);
