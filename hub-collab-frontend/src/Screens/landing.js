import "./landing.css";
import React from "react";
import ProjectCardContainer from "./../components/ProjectCardContainer";
import vansh from "./../assets/vanshCircle.png";
import burger from "./../assets/hamburger.jpg";
import hubpic from "./../assets/hubpic.png";
import paris from "./../assets/paris.jpg";
import ireland from "./../assets/ireland.jpeg";

function Landing() {
  return (
    <React.Fragment>
      <div className="appbar">
        <img src={burger} alt="user" className="hamburgerImage"></img>
        <img src={hubpic} alt="user" className="hubImage"></img>
        <img src={vansh} alt="user" className="userImage"></img>
      </div>
      <div className="LandingContainer">
        <div className="ProjectCardContainer">
          <ProjectCardContainer
            projectImage={paris}
            projectName="HUB COLLAB"
            userName="Username@1"
            langName="JS, REACT, Express"
            projectDescription="Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of Kela."
          />
          <ProjectCardContainer
            projectImage={ireland}
            projectName="AADHAR CARD"
            userName="Username@2"
            langName="Python, PHP,  Rails"
            projectDescription="Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring Kela."
          />
        </div>
        <div className="TopProjectsContainer">
          <h1 className="topProjectHeader">Top Projects</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landing;
