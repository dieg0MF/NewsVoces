import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./Reducers/Index";

import Application from "./App";

// import fontawesome from "@fortawesome/fontawesome";
// import brands from "@fortawesome/fontawesome-free-brands";
// import fas from "@fortawesome/fontawesome-free-solid";
// import far from "@fortawesome/fontawesome-free-regular";

// fontawesome.library.add(brands, fas, far);

// import "./styles.scss";

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Application />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
