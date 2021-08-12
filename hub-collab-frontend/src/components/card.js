import React from "react";
import hub from "./../assets/hubpic.png";
// import back from "./../assets/cardBack.png";
import "./card.css";

const Card = ({ name ,image, tech}) => {
  return (
    <div className="card" >
        <img alt="error" class="cardImage" src={hub}/>
        <img alt="error" className="userCard" src={image}/>
      <h3 className="cardText"> {name} </h3>
      <p className ="cardSkillText">{tech.join(', ')}</p>
    </div>
  );
};

export default Card;
