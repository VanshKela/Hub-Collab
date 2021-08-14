import "./signup.css";
import image2 from "./../assets/image2.png";
import {EmailTextField, PasswordTextField}  from "./../components/TextField.js";
import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitSuccessful},
  } = useForm({ criteriaMode: "all" });
  const onSubmit = (data) => console.log(data);
  return (
    <main>
      <div className="container">
        <div className="form-container">
          <header>
            <h1>HubCollab</h1>
          </header>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign In</h2>
            <EmailTextField
              register={register}
              onChange={null}
              errors={errors}
            />
            <PasswordTextField
              register={register}
              onChange={null}
              errors={errors}
            />
            <button type="submit" className="signUpButton" onClick={console.log(isSubmitSuccessful)}>
              SIGN IN
            </button>
            <p>
              Forgot Password?{" "}
              <span className="signInButton">Click Here to Reset</span>
            </p>
            <p>
              Don't Have an Account?{" "}
              <span className="signInButton">
                <Link to="/sign-up">SIGN UP</Link>
              </span>
            </p>
          </form>
        </div>
        <div className="img-container">
          <img alt="refresh" className="img" src={image2} />
        </div>
      </div>
    </main>
  );
}

export default LogIn;
