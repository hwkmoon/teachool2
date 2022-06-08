import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MenuModifier = ({ id }) => {
  const { courseId } = useParams();

  return (
    <div className="menu-modifier">
      <Link
        className="menu-modifier__link"
        to={`/formateur/cours/modifier/${courseId}/description`}
      >
        Description
      </Link>
      <Link
        className="menu-modifier__link"
        to={`/formateur/cours/modifier/${courseId}/programme`}
      >
        Programme
      </Link>
      <Link
        className="menu-modifier__link"
        to={`/formateur/cours/modifier/${courseId}/tarification`}
      >
        Tarification
      </Link>
      <Link
        className="menu-modifier__link"
        to={`/formateur/cours/modifier/${courseId}/messages`}
      >
        Messages du cours
      </Link>
    </div>
  );
};

export default MenuModifier;
