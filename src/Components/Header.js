import React from "react";
import "./styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import {
faSearchengin
} from "@fortawesome/free-brands-svg-icons";
import FetchNewsByWord from "./FetchNewsByWord";


const newspaper = <FontAwesomeIcon icon={faNewspaper} />;
const searching = <FontAwesomeIcon icon={faSearchengin} />;

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
       {newspaper}
      </div>
      <div className="title">
        <h1> Voces </h1>
        <h4> Todas las noticias, un lugar</h4>
      </div>
      <div className="search">
     {searching}
        <FetchNewsByWord />
      </div>
    </div>
  );
};

export default Header;
