import React from "react";
import Footer from "./Footer";
import "./DevCard.css";

function DevCard({ picture, name, linkedIn, github, mail }) {
  return (
    <div className="card__container">
        <img src={picture} alt="" />
      <div className="name__holder">{name}</div>
      <div className="icons__holder">
        <Footer mail={mail} github={github} linkedIn={linkedIn} />
      </div>
    </div>
  );
}

export default DevCard;
