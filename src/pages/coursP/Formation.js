import React from "react";
import { Link } from "react-router-dom";
import javascript from "../../assets/img/javascript1.jpg";
import { AiFillEye, AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../features/coursesSlice";

const Formation = ({ id, nom, auteur, categorie }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCourse(id));
  };

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
        <button>
          <AiFillEye className="icon" />
          <Link className="voir" to={`/cours/${id}/${nom}`}>
            <span>Voir le cours</span>
          </Link>
        </button>
        <button>
          <FaPen className="icon" />
          <Link className="voir" to={`/formateur/cours/modifier/${id}`}>
            <span>Modifier le cours</span>
          </Link>
        </button>
        <button onClick={handleDelete}>
          <AiFillDelete className="icon" />
          <span>Supprimer le cours</span>
        </button>
      </div>
    </div>
  );
};

export default Formation;
