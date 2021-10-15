import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import NotFound from "./pages/NotFound";
import MadeWith from "./pages/MadeWith";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/made-with" component={MadeWith} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/not-found" component={NotFound} />
        <Route exact path="/" component={Hero} />
        <Redirect from="/home" to="/" />
        <Redirect from="" to="/not-found" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
