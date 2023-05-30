import React from "react";
import "../../assets/scss/app.scss";
// import weddingImg from "../../assets/Images/wedding.jpeg";

const Card = (props) => {
  return (
    <div className="card_container">
      <h4>{props.name}</h4>
      <img className="card_image" src={props.image} alt="img" />
    </div>
  );
};
export default Card;
