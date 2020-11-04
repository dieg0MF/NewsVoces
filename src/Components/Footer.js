import React from "react";
import "./styles/footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
  return (
    <div className="footer">
      <h2> Voces</h2>
      <h4> Todas las noticias, un lugar</h4>
      <div className="redes">
        {/* <FontAwesomeIcon className="redesItems" icon={["fab", "twitter"]} /> */}

        {/* <FontAwesomeIcon
          className="redesItems"
          icon={["fab", "facebook-square"]}
        /> */}
        {/* <FontAwesomeIcon className="redesItems" icon={["far", "envelope"]} />
        <FontAwesomeIcon className="redesItems" icon={["fab", "instagram"]} />
        <FontAwesomeIcon
          className="redesItems"
          icon={["fab", "apple"]}
          size="2x"
        /> */}
      </div>
    </div>
  );
};

export default Header;
