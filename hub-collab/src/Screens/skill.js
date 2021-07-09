import React from "react";
import "./signup.css";

function SkillForm({ onClick }) {
  const skills = ["C++","HTML","CSS","C","JavaScript","React","Python","Go","Dart","Flutter","Node.js"]
  return (
    <form className="form">
      <h2>Choose your Skills</h2>
      <div className="skills-container">
        {
          skills.map((skill)=>{
            return <button type="button" value={skill} onClick={onClick} class="buttonSkill" >{skill}</button>
          })
        }
      </div>
    </form>
  );
}

export default SkillForm;
