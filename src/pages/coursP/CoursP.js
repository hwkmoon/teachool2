import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Search from "../common/Search";
import Trier from "../common/Trier";
import Formation from "./Formation";
import NouveauCours from "./NouveauCours";

const CoursP = () => {
  const courses = useSelector((state) => state.courses);

  return (
    <div className="coursp">
      <h3 className="heading-3">COURS</h3>
      <div className="coursp-content">
        <div className="coursp__features">
          <div className="coursp__input">
            <Trier />
            <Search />
          </div>
          <NouveauCours />
        </div>
        <div className="formations">
          {courses.map((course, idx) => (
            <Formation
              key={idx}
              id={course.id}
              nom={course.title}
              auteur={course.author}
              categorie={course.category}
            />
          ))}
          {/* <Formation name="Formation Javascript" auteur="Hicham Kortbi" />
          <Formation name="SST" auteur="Badre Abdelouhabi" />
          <Formation name="Marketing digitale" auteur="Pascal Malapert" /> */}
        </div>
      </div>
    </div>
  );
};

export default CoursP;
