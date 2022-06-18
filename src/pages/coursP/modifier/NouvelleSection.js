import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { addSection } from "../../../features/coursesSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const NouvelleSection = ({ position }) => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addSection({ id: courseId, title, position }));
      setTitle("");
      handleClose();
    }
  };

  return (
    <>
      <div className="insert-btn-row">
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
        <Box className="coursp__modal">
          <h3 className="heading-3" id="modal-modal-title">
            Nouvelle section
          </h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__input form__input--1">
              <label>Titre</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <button className="form__add">Ajouter section</button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default NouvelleSection;
