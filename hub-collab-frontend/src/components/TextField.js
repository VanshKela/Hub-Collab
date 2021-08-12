import React from "react";
import "./TextField.css";

const TextField = ({ label, type, onChange, register, properties,errors }) => {
  return (
    <div className="textfield">
      <h3> {label} </h3>
      <input {...register(label,properties)} onChange={onChange} className="rounded-input" type={type}/>
      {errors && <p className="error">{errors.message}</p>}
    </div>
  );
};

export default TextField;
