import { createStore } from "redux";
import rootReducer from "./rootReducer";

const initialState = {};

export default () => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(...middleware) // to add other middleware
  );
};
