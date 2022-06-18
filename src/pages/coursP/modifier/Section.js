import React, { useRef, useState } from "react";
import { FcDocument } from "react-icons/fc";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

import { AiOutlinePlus } from "react-icons/ai";
import Session from "./Session";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NouvelleSession from "./NouvelleSession";
import { deleteSection, updateSection } from "../../../features/coursesSlice";

const Section = ({ name, index }) => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const data = courses.find((course) => course.id === courseId);
  const sessions = data.sections[index].sessions;

  const [editable, setEditable] = useState(true);
  const inputRef = useRef();

  const handleEdit = () => {
    console.log(editable);
    setEditable(!editable);
    inputRef.current.focus();
  };

  const handleChange = () => {
    dispatch(
      updateSection({
        id: courseId,
        sectionIndex: index,
        sectionName: inputRef.current.value,
      })
    );
  };

  const handleDelete = () => {
    console.log(index);
    dispatch(
      deleteSection({
        id: courseId,
        sectionIndex: index,
      })
    );
  };

  return (
    <div className="section">
      <div className="section__title">
        <h4 className="heading-4">Section {index + 1}:</h4>
        <FcDocument className="section__icon" />
        <input
          size={name.length}
          className="section__title--name"
          value={name}
          disabled={editable}
          ref={inputRef}
          onChange={handleChange}
        />
        <div className="section__buttons">
          <button className="section__button">
            <BsFillPencilFill onClick={handleEdit} />
          </button>
          <button className="section__button" onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>
      </div>
      <NouvelleSession position="before" index={index} />
      {sessions.map((session, idx) => (
        <Session
          key={idx}
          id={courseId}
          sectionIndex={index}
          sessionIndex={idx}
          name={session.sessionName}
          contenu={session.contenu}
          video={session.video}
        />
      ))}
      <NouvelleSession position="after" index={index} />
    </div>
  );
};

export default Section;
