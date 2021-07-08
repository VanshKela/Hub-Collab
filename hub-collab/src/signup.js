import "./signup.css";
import Card from "./components/card.js";
import React, { Component } from "react";
import user from "./assets/user.png";
import SignUpForm from "./signup1";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SkillForm from "./skill";

class SignUp extends Component {
  state = { selectedFile: user, name: "User Name", email: "email@email.com" };
  fileChangeHandler = (event) => {
    this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });
  };
  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <Router>
        <main>
          <div className="container">
            <div className="form-container">
              <header>
                <h1>HubCollab</h1>
              </header>
              <Switch>
                <Route exact path="/signup" render={()=> <SignUpForm onChangeName={this.nameChangeHandler} onChangeFile={this.fileChangeHandler}/>}></Route>
                <Route exact path="/sign-up-techstack" component={SkillForm}></Route>
              </Switch>
            </div>
            <Card name={this.state.name} image={this.state.selectedFile} />
          </div>
        </main>
      </Router>
    );
  }
}

export default SignUp;
