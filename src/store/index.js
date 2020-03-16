import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../store/reducers/index";
import thunk from "redux-thunk";
import logger from "redux-logger";

let middlewares = [
  thunk,
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "development" && logger
].filter(Boolean);

let middleware = [
  applyMiddleware(...middlewares),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : [])
];

const store = createStore(rootReducer, compose(...middleware));

export default store;
