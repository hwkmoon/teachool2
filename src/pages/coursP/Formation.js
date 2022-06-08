import React from "react";
import { Link } from "react-router-dom";
import javascript from "../../assets/img/javascript1.jpg";

const Formation = ({ id, nom, auteur, categorie }) => {
  return (
    <div className="formation">
      <div className="formation__img">
        <img src={javascript} alt="formation" />
      </div>
      <div className="formation__description">
        <h4 className="heading-4">{nom}</h4>
        <h5 className="heading-5">{auteur}</h5>
        <span>{categorie}</span>
        <div className="formation__state">
          <span>Brouillon</span>
          <span>Public</span>
        </div>
      </div>
      <div className="formation__actions">
        <button className="voir">
          <Link to={`/formateur/cours/modifier/${id}`}>Voir le cours</Link>
        </button>
        <button className="modifier">
          {" "}
          <Link to={`/formateur/cours/modifier/${id}`}>Modifier le cours</Link>
        </button>
      </div>
    </div>
  );
};

export default Formation;
