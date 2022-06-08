import React from "react";
import { useParams } from "react-router-dom";
import MenuModifier from "./MenuModifier";

const ModifierCours = () => {
  const { courseId } = useParams();

  return (
    <div className="modifiercours">
      <MenuModifier id={courseId} />
    </div>
  );
};

export default ModifierCours;
