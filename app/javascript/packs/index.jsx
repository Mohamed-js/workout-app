import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "../src/App";
import reducers from "../src/reducers";

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
