import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateDescription } from "../../../features/coursesSlice";
import { AiFillDelete } from "react-icons/ai";

const Prerequis = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const data = courses.find((course) => course.id === courseId);
  const [prerequis, setPrerequis] = useState(
    data.prerequis ? data.prerequis : ["", "", "", ""]
  );

  const handlePrerequis = useCallback(
    (idx, e) => {
      const prerequisC = [...prerequis];
      prerequisC[idx] = e.target.value;
      setPrerequis(prerequisC);
      dispatch(updateDescription({ id: courseId, prerequis: prerequisC }));
    },
    [prerequis]
  );

  const handlePrerequisDelete = useCallback(
    (idx, e) => {
      const prerequisC = [...prerequis];
      for (let i = 0; i < prerequis.length; i++) {
        if (i === idx) prerequisC.splice(i, 1);
      }
      setPrerequis(prerequisC);
      dispatch(updateDescription({ id: courseId, prerequis: prerequisC }));
    },
    [prerequis]
  );

  const handlePrerequisAdd = useCallback(
    (idx, e) => {
      const prerequisC = [...prerequis];
      prerequisC.push("");
      setPrerequis(prerequisC);
      dispatch(updateDescription({ id: courseId, prerequis: prerequisC }));
    },
    [prerequis]
  );
  return (
    <div className="modifiercours__prerequis">
      <label>Quels sont les prerequis du cours?</label>
      {prerequis.map((requis, idx) => (
        <div className="modifiercours__requis" key={idx}>
          <input
            value={requis}
            className="item"
            onChange={(e) => handlePrerequis(idx, e)}
            maxLength="150"
          />
          <button
            className="deleteitem"
            onClick={(e) => handlePrerequisDelete(idx, e)}
          >
            <AiFillDelete />
          </button>
        </div>
      ))}
      <button className="additem" onClick={handlePrerequisAdd}>
        Ajouter nouveau prerequis
      </button>
    </div>
  );
};

export default Prerequis;
