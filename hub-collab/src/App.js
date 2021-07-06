import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from "./signup.js";
import LogIn from "./login.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp}></Route>
        <Route exact path="/login" component={LogIn}></Route>
      </Switch>
    </Router>
  );
}

export default App;
