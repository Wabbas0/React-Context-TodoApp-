import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
// import ProfileScreen from "./containers/ProfileScreen";
import Login from "./containers/Login";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          {/* <Route
            path="/profile/:profile"
            component={props => <ProfileScreen />}
          /> */}
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
