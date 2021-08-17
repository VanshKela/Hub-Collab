import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Screens/signup.js";
import LogIn from "./Screens/login.js";
import Landing from "./Screens/landing.js";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn}></Route>
        <Route exact path="/sign-up" component={SignUp}></Route>
        <Route exact path="/landing" component={Landing}></Route>
      </Switch>
    </Router>
  );
}

export default App;
