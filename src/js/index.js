import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./components/App.jsx";
import Home from "./components/presentational/Home.jsx";
import Welcome from "./components/presentational/Welcome.jsx";
import reducers from "./reducers";
import Signin from "./components/auth/Signin.jsx";
import Signup from "./components/auth/Signup.jsx";
import Signout from "./components/auth/Signout.jsx";
import "../styles/index.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Welcome} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/signout" component={Signout} />
        <Route path="/home" component={Home} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
