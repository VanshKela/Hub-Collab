import React from "react";
import "./signup.css";

function SkillForm({ onClick }) {
  const skills = ["C++","HTML","CSS","C","C#","JavaScript","React","Python","Go","Dart","Flutter","Node.js", "Rust", "Angular", "Kotlin", "Vue.js", "MySQL", "Java", "Ruby", "PHP", "R"]
  return (
    <React.Fragment>
      <h2>Choose your Skills</h2>
      <div className="skills-container">
        {
          skills.map((skill)=>{
            return <button key={skill} type="button" value={skill} onClick={onClick} className="buttonSkill" >{skill}</button>
          })
        }
      </div>
    </React.Fragment>
  );
}

export default SkillForm;
