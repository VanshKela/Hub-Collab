import {
  NameTextField,
  PasswordTextField,
  EmailTextField,
} from "../components/TextField.js";
import React from "react";
import "./signup.css";
import uploadButton from "./../assets/uploadButton.png";

function SignUpForm({ register, onChangeName, onChangeFile, errors }) {
  return (
    <React.Fragment>
      <h2>Sign Up</h2>
      <NameTextField
        register={register}
        onChange={onChangeName}
        errors={errors}
      />
      <EmailTextField register={register} onChange={null} errors={errors} />
      <PasswordTextField register={register} onChange={null} errors={errors} />
      <div className="upload">
        <h3> Upload Profile Picture </h3>

        <input
          id="inputImage"
          type="file"
          onChange={onChangeFile}
          accept="image/*"
          hidden
        />
        <label htmlFor="inputImage">
          <img alt="Upload" src={uploadButton} className="uploadButton"></img>
        </label>
      </div>
      <br></br>
    </React.Fragment>
  );
}

export default SignUpForm;
