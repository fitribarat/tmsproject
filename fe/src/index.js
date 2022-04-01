import React from "react";
import ReactDOM from "react-dom";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Login from "./Login";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./Header";

ReactDOM.render(
  <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Header">
            <Header />
          </Route>
        </Switch>
      </BrowserRouter>,
  document.getElementById("root")
);
