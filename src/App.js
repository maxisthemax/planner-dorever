import React from "react";
import { Provider } from "react-redux";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import createReduxStore from "./services/createReduxStore";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore
import fbConfig from "./services/fbConfig";
import rrfConfig from "./services/rrfConfig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//containers
import Login from "./containers/Login/Login";

//material-ui
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";
import Dashboard from "./containers/Dashboard/Dashboard";

//routesHelpers
import {
  UserIsNotAuthenticated,
  UserIsAuthenticated
} from "./helpers/routesHelpers";

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
firebase.functions(); // <- needed if using httpsCallable
firebase.storage(); // <- needed if using storage

const store = createReduxStore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <Switch>
              <Route exact path="/" component={UserIsNotAuthenticated(Login)} />
              <Route
                path="/dashboard"
                component={UserIsAuthenticated(Dashboard)}
              />
            </Switch>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
