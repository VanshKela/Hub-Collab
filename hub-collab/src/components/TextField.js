import React from 'react';
import "./TextField.css";

const TextField = ({property}) => {
    return (
        <div className="textfield">
            <h3>{property}</h3>
            <input className="rounded-input" type="text"></input>
        </div>
    );
}

export default TextField;