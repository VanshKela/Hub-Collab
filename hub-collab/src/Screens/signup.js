import "./signup.css";
import Card from "./../components/card.js";
import React, { useState, useEffect } from "react";
import user from "./../assets/user.png";
import SignUpForm from "./signupForm";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import SkillForm from "./skill";

function SignUp() {
  const [state, setState] = useState({
    selectedFile: user,
    name: "User Name",
    email: "email@email.com",
    tech: [],
    visibleButton: false,
  });
  const history = useHistory();
  useEffect(() => {
    return () => {
      window.onpopstate = () => {
        setState({...state,visibleButton:false});
      }
    };
  }, [history.action])
  
  const fileChangeHandler = (event) => {
    setState({
      ...state,
      selectedFile: URL.createObjectURL(event.target.files[0]),
    });
  };
  const registerButtonHandler = (event) => {
    setState({ ...state, visibleButton: true });
  };
  const nameChangeHandler = (event) => {
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
    <>
      <Router>
        <main>
          <div className="container">
            <div className="form-container">
              <header>
                <h1 className="headerName">HubCollab</h1>
              </header>
              <Switch>
                <Route
                  exact
                  path="/sign-up"
                  render={() => (
                    <SignUpForm
                      onChangeName={nameChangeHandler}
                      onChangeFile={fileChangeHandler}
                      onClickButton={registerButtonHandler}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/sign-up-techstack"
                  render={() => <SkillForm onClick={techChangeHandler} />}
                ></Route>
              </Switch>
            </div>
            <div className="cardContainer">
              <Card
                name={state.name}
                image={state.selectedFile}
                tech={state.tech}
              />
              {state.visibleButton ? (
                <button
                  type="submit"
                  onClick={(event) => (window.location.href = "/")}
                  className="registerButton"
                >
                  Register
                </button>
              ) : null}
            </div>
          </div>
        </main>
      </Router>
    </>
  );
}

export default SignUp;
