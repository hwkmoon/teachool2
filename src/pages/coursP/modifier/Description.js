import React, { useState, useRef, useEffect, useCallback } from "react";
import Editorjs from "../../common/Editorjs";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateDescription } from "../../../features/coursesSlice";
import MenuModifier from "./MenuModifier";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { AiOutlineFileImage, AiFillDelete } from "react-icons/ai";
import Objectifs from "./Objectifs";
import Prerequis from "./Prerequis";

const Description = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const data = courses.find((course) => course.id === courseId);
  const [title, setTitle] = useState(data.title ? data.title : "");
  const [category, setCategory] = useState(data.category ? data.category : "");
  const [objectifs, setObjectifs] = useState(
    data.objectifs ? data.objectifs : ["", "", "", ""]
  );

  const [level, setLevel] = useState("");

  console.log("Objectifs");
  console.log(objectifs);

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
          <div id="title" className="modifiercours__input">
            <TextField
              id="standard-basic"
              className="textfield"
              label="Titre du cours"
              variant="standard"
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
          <Objectifs />
          <Prerequis />
          <div className="modifiercours__infos">
            <div className="modifiercours__imagesource">
              <AiOutlineFileImage />
              <span>Télécharger image du cours</span>
            </div>
            <div id="category" className="modifiercours__input">
              <TextField
                id="standard-basic"
                className="textfield"
                label="Catégorie"
                variant="standard"
                value={category}
                onChange={handleCategory}
              />
            </div>
            <FormControl id="level" className="select" variant="standard">
              <InputLabel className="select__label">Niveau</InputLabel>
              <Select
                className="select__input"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                label="Age"
              >
                <MenuItem className="select__item" value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem className="select__item" value={10}>
                  Débutant
                </MenuItem>
                <MenuItem className="select__item" value={20}>
                  Intermédiaire
                </MenuItem>
                <MenuItem className="select__item" value={30}>
                  Avancé
                </MenuItem>
                <MenuItem className="select__item" value={30}>
                  Tous niveaux
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
