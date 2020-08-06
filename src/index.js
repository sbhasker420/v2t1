import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import resultReducer from "./store/reducers/result";
import counterReducer from "./store/reducers/counter";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />,document.getElementById('root');

const rootReducer = combineReducers({
  ctrRed: counterReducer,
  resRed: resultReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title="[App.js] heading as props from [index.js] " />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
