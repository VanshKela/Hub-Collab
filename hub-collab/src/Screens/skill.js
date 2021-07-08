import React from "react";
import "./signup.css";

function SkillForm({ onClick }) {
  const skills = ["C++","HTML","CSS"]
  return (
    <form className="form">
      <h2>Skill</h2>
      <div>
        {
          skills.map((skill)=>{
            return <button type="button" value={skill} onClick={onClick} >{skill}</button>
          })
        }
      </div>
    </form>
  );
}

export default SkillForm;
