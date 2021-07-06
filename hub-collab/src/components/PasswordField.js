import React from 'react';
import "./TextField.css";

const PasswordField = ({property}) => {
    return (
        <div className="passwordfield">
            <h3>{property}</h3>
            <input className="rounded-input" type="password" ></input>
        </div>
    );
}

export default PasswordField;