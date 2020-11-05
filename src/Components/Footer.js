import React from "react";
import "./styles/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const arroba = <FontAwesomeIcon icon={faAt} />;
  const facebook = <FontAwesomeIcon icon={faFacebook} />;
  const instagram = <FontAwesomeIcon icon={faTwitter} />;
  const twitter = <FontAwesomeIcon icon={faInstagram} />;
  const whatsApp = <FontAwesomeIcon icon={faWhatsapp} />;
  const snap = <FontAwesomeIcon icon={faSnapchat} />;

  return (
    <div className="footer">
      <h2> Voces</h2>
      <h4> Todas las noticias, un lugar</h4>
      <div className="redes">
        <ul>
          <li>{arroba}</li>
          <li>{facebook}</li>
          <li>{instagram}</li>
          <li>{twitter}</li>
          <li>{whatsApp}</li>
          <li>{snap}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
