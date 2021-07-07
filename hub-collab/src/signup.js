import "./signup.css";
import Card from "./components/card.js";
import uploadButton from "./assets/uploadButton.png";
import TextField from "./components/TextField.js";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "./assets/user.png";

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
            <form className="form">
              <h2>Sign Up</h2>
              <TextField
                onChange={this.nameChangeHandler}
                type={"text"}
                property={"Name"}
              />
              <br></br>
              <TextField
                onChange={this.emailChangeHandler}
                type={"text"}
                property={"Email"}
              />
              <br></br>
              <TextField
                onChange={null}
                type={"password"}
                property={"Password"}
              />
              <br></br>
              <div>
                <h3> Upload Profile Picture </h3>

                <input
                id="inputImage"
              
                  type="file"
                  onChange={this.fileChangeHandler}
                  accept="image/*"
                  hidden
                />
                <label htmlFor="inputImage"><img src={uploadButton} class="uploadButton"></img></label>
              </div>
              <br></br>
              <button
                type="button"
                class="signUpButton"
                onClick={this.uploadHandler}
              >
                SIGN UP
              </button>
              <br></br>
              <p>
                Already have an account?{" "}
                <span class="signInButton">
                  <Link to="/">SIGN IN</Link>
                </span>
              </p>
            </form>
          </div>
          {/* <div className="img-container">
            <img className="small-image" src={this.state.selectedFile}></img>
            <h1>{this.state.name}</h1>
            <h2>{this.state.email}</h2>
          </div> */}
          <Card name={this.state.name} image={this.state.selectedFile}/>
        </div>
      </main>
    );
  }
}

export default SignUp;
