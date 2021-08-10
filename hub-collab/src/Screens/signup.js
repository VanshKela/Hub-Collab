import "./signup.css";
import Card from "./../components/card.js";
import React, { Component } from "react";
import user from "./../assets/user.png";
import SignUpForm from "./signupForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SkillForm from "./skill";

class SignUp extends Component {
  state = {
    selectedFile: user,
    name: "User Name",
    email: "email@email.com",
    tech: [],
    visibleButton: false,
  };
  fileChangeHandler = (event) => {
    this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });
  };
  registerButtonHandler = (event) => {
    this.setState({ visibleButton: true });
  };
  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  techChangeHandler = (e) => {
    if (!this.state.tech.includes(e.target.value)) {
      this.setState({
        tech: this.state.tech.concat([e.target.value]),
      });
    } else {
      this.setState({
        tech: this.state.tech.filter((item) => item !== e.target.value),
      });
    }
  };

  render() {
    return (
    <>
      <Router>
        <main>
          <div className="container">
            <div className="form-container">
              <header>
                <h1 className="headerName">HubCollab</h1>
              </header>
              <Switch>
                <Route
                  exact
                  path="/sign-up"
                  render={() => (
                    <SignUpForm
                      onChangeName={this.nameChangeHandler}
                      onChangeFile={this.fileChangeHandler}
                      onClickButton={this.registerButtonHandler}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/sign-up-techstack"
                  render={() => <SkillForm onClick={this.techChangeHandler} />}
                ></Route>
              </Switch>
            </div>
            <div className="cardContainer">
              <Card
                name={this.state.name}
                image={this.state.selectedFile}
                tech={this.state.tech}
              />
              {this.state.visibleButton ? (
                <button className="registerButton">Register</button>
              ) : (
                null
              )}
            </div>
          </div>
        </main>
      </Router>
      </>
    );
  }
}

export default SignUp;
