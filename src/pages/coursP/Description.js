import React, { useState, useRef, useEffect, useCallback } from "react";
import Editorjs from "../common/Editorjs";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateDescription } from "../../features/coursesSlice";
import MenuModifier from "./MenuModifier";
import { TextField } from "@mui/material";

const Description = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const data = courses.find((course) => course.id === courseId);
  const [title, setTitle] = useState(data.title ? data.title : "");
  const [category, setCategory] = useState(data.category ? data.category : "");
  const handleDispatch = (data) => {
    dispatch(
      updateDescription({
        id: courseId,
        description: data,
        title,
      })
    );
  };

  const handleTitle = useCallback(
    (e) => {
      setTitle(e.target.value);
      dispatch(
        updateDescription({
          id: courseId,
          title: e.target.value,
        })
      );
    },
    [title]
  );

  const handleCategory = useCallback(
    (e) => {
      setCategory(e.target.value);
      dispatch(
        updateDescription({
          id: courseId,
          category: e.target.value,
        })
      );
    },
    [category]
  );

  return (
    <div className="modifiercours">
      <MenuModifier />
      <div className="modifiercours-content">
        <div className="modifiercours__title">
          <h3 className="heading-3">Description</h3>
        </div>
        <div className="modifiercours__form">
          <div className="modifiercours__input">
            <label>Titre du cours</label>
            <input
              value={title}
              onChange={handleTitle}
              placeholder="Titre du cours..."
            ></input>
            <TextField
              id="standard-basic"
              label="Titre du cours"
              variant="filled"
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className="modifiercours__editor">
            <label>Description du cours</label>
            <Editorjs
              editorId="description"
              editorData={data.description ? JSON.parse(data.description) : ""}
              dispatcher={handleDispatch}
            />
          </div>
          <div className="modifiercours__infos">
            <div className="modifiercours__input">
              <label>Catégorie</label>
              <input
                value={category}
                onChange={handleCategory}
                placeholder="Titre du cours..."
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
