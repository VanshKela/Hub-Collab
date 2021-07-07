import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from "./signup.js";
import LogIn from "./login.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
