import "./signup.css";
import image2 from "./../assets/image2.png";
import TextField from "./../components/TextField.js";
import {Link} from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";

function LogIn() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <main>
      <div className="container">
        <div className="form-container">
          <header>
            <h1>HubCollab</h1>
          </header>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign In</h2>
            <TextField register={register} onChange={null} type={"text"} label={"Email"} />
            <br></br>
            <TextField register={register} onChange={null} type={"password"} label={"Password"} />
            <br></br><br></br>
            
            <button type="submit" class="signUpButton">
              SIGN IN
            </button>
            <br></br>
            <p>
              Forgot Password? <span class="signInButton">Click Here to Reset</span>
            </p>
            <p>
              Don't Have an Account? <span class="signInButton"><Link to ="/sign-up">SIGN UP</Link></span>
            </p>
          </form>
        </div>
        <div className="img-container">
          <img alt="refresh" className="img"  src={image2} />
        </div>
      </div>
    </main>
  );
}

export default LogIn;
