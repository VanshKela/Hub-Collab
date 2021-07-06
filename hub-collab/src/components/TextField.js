import React from 'react';
import "./TextField.css";

const TextField = ({property,type}) => {
    return (
        <div className="textfield">
            <h3>{property}</h3>
            <input className="rounded-input" type={type} ></input>
        </div>
    );
}

export default TextField;