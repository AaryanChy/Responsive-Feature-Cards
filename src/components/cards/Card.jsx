import React from "react";
import "./card.scss";
const Card = ({ title, className, description }) => {
  return (
    <div className={`card-Component ${className}`}>
      <h1>{title}</h1>
      <p className='description'>{description}</p>
    </div>
  );
};

export default Card;
