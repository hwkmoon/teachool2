import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Blocks from "editorjs-blocks-react-renderer";
import { BiTimeFive, BiCertification } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";

const Cours = () => {
  const { courseId } = useParams();
  const courses = useSelector((state) => state.courses);
  const data = courses.find((course) => course.id === courseId);
  console.log(data);

  const title = data.title ? data.title : "";
  const description = data.description ? JSON.parse(data.description) : "";
  const objectifs = data.objectifs ? data.objectifs : [];
  const prerequis = data.prerequis ? data.prerequis : [];

  return (
    <div className="cours">
      <div className="cours__main">
        <h2 className="cours__title heading-2">{title}</h2>
        <div className="cours__description">
          <div className="cours__description--left">
            <Blocks data={description} />
          </div>
          <div className="cours__description--right">
            <div className="cours__stats">
              <div className="stat">
                <BiTimeFive />
                <span>Durée: 75h</span>
              </div>
              <div className="stat">
                <GiSandsOfTime />
                <span>Travail: 5h/semaine (conseillé)</span>
              </div>
              <div className="stat">
                <BiCertification />
                <span>Certificat</span>
              </div>
            </div>
            <button className="cours__btn">Continuer le cours</button>
          </div>
        </div>
      </div>
      <div className="cours__secondary">
        <div className="cours__objectifs">
          <h3 className="heading-3">Ce que vous apprendrez</h3>
          <div className="objectifs">
            {objectifs.map((objectif, idx) => {
              if (objectif) return <li key={idx}>{objectif}</li>;
            })}
          </div>
        </div>

        <div className="cours__prerequis">
          <h3 className="heading-3">Prerequis</h3>
          <div className="prerequis">
            {prerequis.map((requis, idx) => {
              if (requis) return <li key={idx}>{requis}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cours;
