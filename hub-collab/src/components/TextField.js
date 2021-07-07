import React from "react";
import "./TextField.css";

const TextField = ({ property, type, onChange }) => {
  return (
    <div className="textfield">
      <h3> {property} </h3>
      <input onChange={onChange} className="rounded-input" type={type}>
      </input>
    </div>
  );
};

export default TextField;
