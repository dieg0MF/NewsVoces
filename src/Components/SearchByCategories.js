import React from "react";

import { Link } from "react-router-dom";

const FetchNewsCategories = () => {
  return (
    <>
      <div className="searchBar">
        <Link to="/">
          <button id="general">Principales</button>
        </Link>
        <Link to="/categoria/deportes">
          <button id="5">Deportes</button>
        </Link>
        <Link to={"/categoria/espectaculos"}>
          <button id="4">Espectaculos</button>
        </Link>
        <Link to={"/categoria/tecnologia"}>
          <button id="3">Tecnologia</button>
        </Link>
        <Link to={"/categoria/internacionales"}>
          <button id="2">Internacionales</button>
        </Link>
        <Link to={"/categoria/politica"}>
          <button id="1">Politica</button>
        </Link>
      </div>
    </>
  );
};
export default FetchNewsCategories;
