import React from "react";
// import for materialize
import "materialize-css/dist/css/materialize.min.css";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import Emaily from "./components/App";

// REDUCERS
import reducers from "./reducers";


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Emaily />
  </Provider>,
  document.getElementById("root")
);
