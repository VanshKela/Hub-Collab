import React from "react";
import hub from "./../assets/hubpic.png";
import back from "./../assets/cardBack.png";
import "./card.css";

const Card = ({ name ,image}) => {
  return (
    <div className="card" >
        <img class="cardImage" src={hub}/>
        <img className="userCard" src={image}/>
      <h3 className="cardText"> {name} </h3>
    </div>
  );
};

export default Card;
