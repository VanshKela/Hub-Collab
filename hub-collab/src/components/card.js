import React from "react";
import image2 from "./../assets/hubpic.png";
import "./card.css";

const Card = ({ name ,image}) => {
  return (
    <div className="card">
        <img class="cardImage" src={image2}/>
        <img className="userCard" src={image}/>
      <h3 className="cardText"> {name} </h3>
    </div>
  );
};

export default Card;
