import React, { useEffect, useState } from "react";
import MenuModifier from "./MenuModifier";
import Section from "./Section";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NouvelleSection from "./NouvelleSection";

const Programme = () => {
  const { courseId } = useParams();
  const courses = useSelector((state) => state.courses);
  const data = courses.find((course) => course.id === courseId);
  const sections = data.sections;

  return (
    <>
      <div className="modifiercours">
        <MenuModifier />
        <div className="modifiercours-content">
          <div className="modifiercours__title">
            <h3 className="heading-3">Programme</h3>
          </div>
          <div className="programme">
            <p className="programme__paragraph">
              Pour donner forme à votre cours, créez des sections, des sessions
              et des exercices pratiques (quiz, exercices de codage et
              exercices).
            </p>
            <NouvelleSection position="before" />;
            {sections.map((section, idx) => (
              <Section key={idx} index={idx} name={section.sectionName} />
            ))}
            <NouvelleSection position="after" />;
          </div>
        </div>
      </div>
    </>
  );
};

export default Programme;
