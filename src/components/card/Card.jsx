import React from "react";
import { Link } from "react-router-dom";

const Card = ({ el }) => {
  return (
    <div className="box">
      <Link to="/ropa/show">
        <img alt="Imagen" src={el.image} />
        <h1>{el.title}</h1>
        <h2>categoria</h2>
        <p>precio</p>
      </Link>
    </div>
  );
};

export default Card;
