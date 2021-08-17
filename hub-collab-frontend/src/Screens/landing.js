import "./landing.css";
import React from "react";
import ProjectCardContainer from "./../components/ProjectCardContainer";

function Landing() {
  return (
    <React.Fragment>
      <div className="Appbar">
        <h1>AppBar</h1>
      </div>
      <div className="LandingContainer">
        <div className="ProjectCardContainer">
          <ProjectCardContainer />
          <ProjectCardContainer />
        </div>
        <div className="TopProjectsContainer">
          <h1>Top Projects</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landing;
