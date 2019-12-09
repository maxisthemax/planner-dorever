import React, { useState } from "react";
import clsx from "clsx";

//components
import TopBar from "./components/TopBar/TopBar";

//material-ui
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

//helpers
import {} from "../../helpers/formValidationHelpers";

//assets

//styles
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: "100%"
  }
}));

function Main({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });

  //states
  const [openSidebar, setOpenSidebar] = useState(false);

  //const
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  //functions

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <TopBar onSidebarOpen={() => setOpenSidebar(true)} />
      {/* <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
      /> */}
      <main className={classes.content}>
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default Main;
