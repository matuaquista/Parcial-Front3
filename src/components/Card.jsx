import React from "react";
import "./Card.css";

const Card = ({ nombre, banda }) => {
  return (
    <div className="container">
      <div>{nombre}</div>
      <h3>tu banda favorita es: </h3>
      <div>{banda}</div>
    </div>
  );
};

export default Card;
