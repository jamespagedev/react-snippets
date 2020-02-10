import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";

// middleware
import thunk from "redux-thunk";
import logger from "redux-logger";

// reducers
import { ModalReducer, UserReducer } from "./store/reducers/index.js";

const rootReducer = combineReducers({
  modals: ModalReducer,
  users: UserReducer
});

let store;
if (process.env.REACT_ENV === "development") {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
