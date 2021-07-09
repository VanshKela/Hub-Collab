import React from "react";
import "./signup.css";

function SkillForm({ onClick }) {
  const skills = ["C++","HTML","CSS","C","JS","REACT","PYTHON","GO","DART","FLUTTER","NODEJS"]
  return (
    <form className="form">
      <h2>Choose your Skills</h2>
      <div>
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
