import TextField from "../components/TextField.js";
import React from "react";
import "./signup.css";
import uploadButton from "./../assets/uploadButton.png";
import { useForm } from "react-hook-form";

function SignUpForm({ onChangeName, onChangeFile, onClickButton }) {
  const { register } = useForm({ mode: "onChange" });
  return (
    <React.Fragment>
      <h2>Sign Up</h2>
      <TextField
        register={register}
        onChange={onChangeName}
        type={"text"}
        label={"Name"}
      />
      <TextField
        register={register}
        onChange={null}
        type={"text"}
        label={"Email"}
      />
      <TextField
        register={register}
        onChange={null}
        type={"password"}
        label={"Password"}
      />
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
    </React.Fragment>
  );
}

export default SignUpForm;
