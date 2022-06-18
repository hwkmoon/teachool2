import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateDescription } from "../../../features/coursesSlice";
import { AiFillDelete } from "react-icons/ai";

const Objectifs = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const data = courses.find((course) => course.id === courseId);
  const [objectifs, setObjectifs] = useState(
    data.objectifs ? data.objectifs : ["", "", "", ""]
  );

  const handleObjectif = useCallback(
    (idx, e) => {
      const objectifsC = [...objectifs];
      objectifsC[idx] = e.target.value;
      setObjectifs(objectifsC);
      dispatch(updateDescription({ id: courseId, objectifs: objectifsC }));
    },
    [objectifs]
  );

  const handleObjectifDelete = useCallback(
    (idx, e) => {
      const objectifsC = [...objectifs];
      for (let i = 0; i < objectifs.length; i++) {
        if (i === idx) objectifsC.splice(i, 1);
      }
      setObjectifs(objectifsC);
      dispatch(updateDescription({ id: courseId, objectifs: objectifsC }));
    },
    [objectifs]
  );

  const handleObjectifAdd = useCallback(
    (idx, e) => {
      const objectifsC = [...objectifs];
      objectifsC.push("");
      setObjectifs(objectifsC);
      dispatch(updateDescription({ id: courseId, objectifs: objectifsC }));
    },
    [objectifs]
  );

  return (
    <div className="modifiercours__objectifs">
      <label>
        Que vont apprendre les participants inscrits à votre cours ?
      </label>
      {objectifs.map((objectif, idx) => (
        <div className="modifiercours__objectif" key={idx}>
          <input
            value={objectif}
            className="item"
            onChange={(e) => handleObjectif(idx, e)}
            maxLength="150"
          />
          <button
            className="deleteitem"
            onClick={(e) => handleObjectifDelete(idx, e)}
          >
            <AiFillDelete />
          </button>
        </div>
      ))}
      <button className="additem" onClick={handleObjectifAdd}>
        Ajouter nouvel objectif
      </button>
    </div>
  );
};

export default Objectifs;
