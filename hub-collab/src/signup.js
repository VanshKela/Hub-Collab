import "./signup.css";
import image from "./assets/image.png";
import TextField from "./components/TextField.js";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "./assets/user.png";

class SignUp extends Component {
  state = { selectedFile: user };
  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  uploadHandler = () => {
    console.log(this.state.selectedFile);
  };
  render() {
    return (
      <main>
        <div className="container">
          <div className="form-container">
            <header>
              <h1>HubCollab</h1>
            </header>
            <article className="form">
              <h2>Sign Up</h2>
              <TextField type={"text"} property={"Name"} />
              <br></br>
              <TextField type={"text"} property={"Email"} />
              <br></br>
              <TextField type={"password"} property={"Password"} />
              <br></br>
              <div>
                <h3> Upload Profile Picture </h3>
                <React.Fragment>
                  <input type="file" onChange={this.fileChangedHandler} accept="image/*" />
                </React.Fragment>
              </div>
              <br></br>
              <button type="button" class="signUpButton" onClick={this.uploadHandler}>
                SIGN UP
              </button>
              <br></br>
              <p>
                Already have an account?{" "}
                <span class="signInButton">
                  <Link to="/">SIGN IN</Link>
                </span>
              </p>
            </article>
          </div>
          <div className="img-container">
            <img className="img" src={image} />
          </div>
        </div>
      </main>
    );
  }
}

export default SignUp;
