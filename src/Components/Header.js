import React from "react";
import "./styles/header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import FetchNewsByWord from "./FetchNewsByWord";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {/* <FontAwesomeIcon className="redesItems" icon={["far", "newspaper"]} /> */}
      </div>
      <div className="title">
        <h1> Voces </h1>
        <h4> Todas las noticias, un lugar</h4>
      </div>
      <div className="search">
        {/* <FontAwesomeIcon className="redesItems" icon={["fab", "searchengin"]} /> */}
        <FetchNewsByWord />
      </div>
    </div>
  );
};

export default Header;
