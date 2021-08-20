import "./login.css";
import image2 from "./../assets/image2.png";
import {
  EmailTextField,
  PasswordTextField,
} from "./../components/TextField.js";
import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";

function LogIn() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });
  const onSubmit = (data) => {
    fetch("/api/v1/users/login", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.Email,
        password: data.Password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") history.push("/landing");
      });
  };
  return (
    <main>
      <div className="container">
        <div className="form-container">
          <header>
            <h1>HubCollab</h1>
          </header>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="signin">
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
            </div>
            <button type="submit" className="signUpButton">
              Sign In
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
