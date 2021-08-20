import "./signup.css";
import Card from "./../components/card.js";
import React, { useState } from "react";
import user from "./../assets/user.png";
import SignUpForm from "./signupForm";
import SkillForm from "./skillForm";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ criteriaMode: "all", mode: "onBlur" });

  const [state, setState] = useState({
    image: user,
    selectedFile: user,
    name: "User Name",
    email: "email@email.com",
    tech: [],
    formVisible: true,
  });

  const onSubmit = (data) => {
    fetch("/api/v1/users/signup", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.Email,
        password: data.Password,
        name: data.Name,
        skills: state.tech,
        image: state.image,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        window.location.href = "/";
      });
  };

  const fileChangeHandler = (event) => {
    setState({
      ...state,
      image: event.target.files[0],
      selectedFile: URL.createObjectURL(event.target.files[0]),
    });
  };
  const nameChangeHandler = (event) => {
    if (event.target.value.length < 19)
      setState({ ...state, name: event.target.value });
  };
  const techChangeHandler = (e) => {
    if (!state.tech.includes(e.target.value)) {
      setState({
        ...state,
        tech: state.tech.concat([e.target.value]),
      });
    } else {
      setState({
        ...state,
        tech: state.tech.filter((item) => item !== e.target.value),
      });
    }
  };

  return (
    <div className="container2">
      <div className="form-container2">
        <header>
          <h1 className="headerName">HubCollab</h1>
        </header>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {state.formVisible && (
            <div>
              <SignUpForm
                onChangeName={nameChangeHandler}
                onChangeFile={fileChangeHandler}
                errors={errors}
                register={register}
              />
              <button
                type="button"
                className="continue"
                onClick={() => {
                  if (isValid)
                    setState({
                      ...state,
                      formVisible: false,
                    });
                }}
              >
                Continue
              </button>
              <br></br>
              <p>
                Already have an account?
                <span className="signInButton">
                  <button
                    id="back-btn"
                    hidden
                    type="button"
                    onClick={(event) => (window.location.href = "/")}
                  >
                    SIGN IN
                  </button>
                  <label htmlFor="back-btn">SIGN IN</label>
                </span>
              </p>
            </div>
          )}
          {!state.formVisible && <SkillForm onClick={techChangeHandler} />}
          <div className="cardContainer">
            <Card
              name={state.name}
              image={state.selectedFile}
              tech={state.tech}
              className="profileCard"
            />
            {!state.formVisible && (
              <button
                type="submit"
                className="continue registerButton"
              >
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
