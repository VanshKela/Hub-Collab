import React, { useState } from "react";
import "./signup.css";

function SkillForm({ onClick }) {
  const skills = ["C++", "HTML", "CSS", "C", "C#", "JavaScript", "React", "Python", "Go", "Dart", "Flutter", "Node.js", "Rust", "Angular", "Kotlin", "Vue.js", "MySQL", "Java", "Ruby", "PHP", "R"]

  const handleClick = (e) => {
    console.log("this is working fine");
    e.preventDefault();

    if (e.target.style.color === "white") {
      e.target.style.background = 'white';
      e.target.style.color = '#050d52';
      
    }
    else {
      e.target.style.background = '#050d52';
      e.target.style.color = 'white';
    }

    console.log(e.target);
  }
  return (
    <React.Fragment>
      <h2>Choose your Skills</h2>
      <div className="skills-container">
        {
          skills.map((skill) => {
            return <button key={skill} type="button" value={skill} onClick={(e) => {
              onClick(e);
              handleClick(e);
            }} className="buttonSkill" >{skill}</button>
          })
        }
      </div>
    </React.Fragment>
  );
}

export default SkillForm;
