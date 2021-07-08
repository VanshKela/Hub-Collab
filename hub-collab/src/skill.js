import React from "react";
import "./signup.css";

function SkillForm({onClick}) {
  return (
    <form className="form">
      <h2>Skill</h2>
      <button value="C++" onClick={onClick}>C++</button>
    </form>
  );
}

export default SkillForm;
