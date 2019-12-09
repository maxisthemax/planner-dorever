// import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import LoadingScreen from "../components/LoadingSpinnerFull"; // change it to your custom component

export const UserIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsAuthenticated",
  AuthenticatingComponent: LoadingScreen,
  allowRedirectBack: true,
  redirectPath: "/",
  authenticatingSelector: ({ firebase: { auth, isInitializing, profile } }) =>
    !auth.isLoaded || !profile.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth, profile } }) =>
    auth.isLoaded && !auth.isEmpty && profile.isLoaded && !profile.isEmpty
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsNotAuthenticated",
  AuthenticatingComponent: LoadingScreen,
  allowRedirectBack: false,
  redirectPath: "/dashboard",
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty
});
