import React from "react";
import "./styles/error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <img
        src={require("../Images/WrongWay.png")}
        alt="Error ocurred"
        width="300"
        height="250"
      />
      <div className="error_data">
        <h2>La Direccion ingresada no existe</h2>
        <Link to="/">Volver a Inicio</Link>
      </div>
    </div>
  );
};

export default Error;
