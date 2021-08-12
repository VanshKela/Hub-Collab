import TextField from "../components/TextField.js";
import React, {useState} from "react";
import "./signup.css";
import uploadButton from "./../assets/uploadButton.png";
import { Route } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUpForm({ onChangeName, onChangeFile, onClickButton }) {
  const [isFormValid, setFormValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {console.log(data);setFormValid(true)};
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>
      <TextField
        register={register}
        onChange={onChangeName}
        type={"text"}
        label={"Name"}
      />
      <br></br>
      <TextField
        register={register}
        onChange={null}
        type={"text"}
        label={"Email"}
      />
      <br></br>
      <TextField
        register={register}
        onChange={null}
        type={"password"}
        label={"Password"}
      />
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
      {!isFormValid&&<button
            type="submit"
            className="signUpButton" 
            onClick={() => {
              console.log(isSubmitted);
            }}
          >
            SIGN UP
      </button>}
      {isFormValid&&<Route
        render={({ history }) => (
          <button
            type="button"
            className="signUpButton continue"
            onClick={() => {
              history.push("sign-up/techstack");
              onClickButton();
            }}
          >
            Continue
          </button>
        )}
      />}
      <br></br>
      <p>
        Already have an account?
        <span class="signInButton">
          <Route
            render={({ history }) => (
              <button
                id="back-btn"
                hidden
                type="button"
                onClick={() => {
                  history.goBack();
                }}
              >
                SIGN IN
              </button>
            )}
          />
          <label htmlFor="back-btn">SIGN IN</label>
        </span>
      </p>
    </form>
  );
}

export default SignUpForm;
