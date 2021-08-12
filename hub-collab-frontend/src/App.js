import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Screens/signup.js";
import LogIn from "./Screens/login.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn}></Route>
        <Route exact path="/sign-up" component={SignUp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
