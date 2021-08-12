import React from "react";
import "./TextField.css";

const TextField = ({ label, type, onChange, register }) => {
  return (
    <div className="textfield">
      <h3> {label} </h3>
      <input {...register(label, { required: true })} onChange={onChange} className="rounded-input" type={type}/>
    </div>
  );
};

export default TextField;
