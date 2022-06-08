import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addCourse } from "../../features/coursesSlice";
import { useDispatch } from "react-redux";

const NouveauCours = () => {
  const courses = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category && author) {
      dispatch(
        addCourse({
          id: nanoid(),
          title,
          category,
          author,
        })
      );
      setTitle("");
      setCategory("");
      setAuthor("");
      handleClose();
    }
  };

  return (
    <>
      <button className="cours__btn" onClick={handleOpen}>
        Nouveau cours
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="cours__modal">
          <h3 className="heading-3" id="modal-modal-title">
            Nouveau cours
          </h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__input form__input--1">
              <label>Titre</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="form__input form__input--2">
              <label>Catégorie</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div className="form__input form__input--3">
              <label>Auteur</label>
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </div>
            <button className="form__add">Ajouter cours</button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default NouveauCours;
