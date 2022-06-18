import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { addSession } from "../../../features/coursesSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const NouvelleSession = ({ position, index }) => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addSession({ id: courseId, title, position, index }));
      setTitle("");
      handleClose();
    }
  };
  return (
    <>
      <div className="insert-btn-row insert-btn-row--session">
        <button onClick={handleOpen}>
          <AiOutlinePlus />
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="cours__modal">
          <h3 className="heading-3" id="modal-modal-title">
            Nouvelle session
          </h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__input form__input--1">
              <label>Titre</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <button className="form__add">Ajouter session</button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default NouvelleSession;
