import TextField from "./components/TextField.js";
import React from "react";
import "./signup.css";
import uploadButton from "./assets/uploadButton.png";
import { Route,Link } from "react-router-dom";

function SignUpForm({ onChangeName, onChangeFile }) {
  return (
    <form className="form">
      <h2>Sign Up</h2>
      <TextField onChange={onChangeName} type={"text"} property={"Name"} />
      <br></br>
      <TextField onChange={null} type={"text"} property={"Email"} />
      <br></br>
      <TextField onChange={null} type={"password"} property={"Password"} />
      <br></br>
      <div>
        <h3> Upload Profile Picture </h3>

        <input
          id="inputImage"
          type="file"
          onChange={onChangeFile}
          accept="image/*"
          hidden
        />
        <label htmlFor="inputImage">
          <img alt="Upload" src={uploadButton} class="uploadButton"></img>
        </label>
      </div>
      <br></br>
      <Route
        render={({ history }) => (
          <button type="button" class="signUpButton" onClick={() => { history.push('sign-up-techstack')}}>
            SIGN UP
          </button>
        )}
      />
      <br></br>
      <p>
        Already have an account?
        <span class="signInButton">
          <Link to="/">SIGN IN</Link>
        </span>
      </p>
    </form>
  );
}

export default SignUpForm;
