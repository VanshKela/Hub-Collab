import "./signup.css";
import React, { Component } from "react";
import user from "./assets/user.png";
import SignUpForm from "./signup1";

class SignUp extends Component {
  state = { selectedFile: user, name: "XYZ", email: "XYZ@gmail.com" };
  fileChangeHandler = (event) => {
    this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });
  };
  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  emailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  render() {
    return (
      <main>
        <div className="container">
          <div className="form-container">
            <header>
              <h1>HubCollab</h1>
            </header>
            <SignUpForm onChangeName={this.nameChangeHandler} onChangeEmail={this.emailChangeHandler} onChangeFile={this.fileChangeHandler}/>
          </div>
          <div className="img-container">
            <img className="small-image" src={this.state.selectedFile}></img>
            <h1>{this.state.name}</h1>
            <h2>{this.state.email}</h2>
          </div>
        </div>
      </main>
    );
  }
}

export default SignUp;
