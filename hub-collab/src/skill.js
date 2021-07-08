import React from "react";
import "./signup.css";

function SkillForm({ onClick }) {
  return (
    <form className="form">
      <h2>Skill</h2>
      <input type="button" value="C++" onClick={onClick} />
      <input type="button" value="HTML" onClick={onClick} />
      <input type="button" value="CSS" onClick={onClick} />
    </form>
  );
}

export default SkillForm;
