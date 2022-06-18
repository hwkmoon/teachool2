import React, { useState, useRef, useCallback } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FcDocument } from "react-icons/fc";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import {
  AiOutlinePlus,
  AiOutlineClose,
  AiFillPlayCircle,
} from "react-icons/ai";
import { HiDocument } from "react-icons/hi";
import { isEmptyObject } from "../../../utils/check";
import { current } from "@reduxjs/toolkit";
import Editorjs from "../../common/Editorjs";
import { useDispatch } from "react-redux";
import {
  deleteSession,
  updateContenu,
  updateSession,
} from "../../../features/coursesSlice";

const Session = ({ id, name, sectionIndex, sessionIndex, contenu, video }) => {
  const [display, setDisplay] = useState(false);
  const [hidden, setHidden] = useState({
    add: true,
    edit: true,
    title: false,
    article: true,
    video: true,
  });
  const [videoLink, setVideoLink] = useState(video);
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(true);
  const inputRef = useRef();
  const handleEdit = () => {
    setEditable(!editable);
    inputRef.current.focus();
  };

  const handleChange = () => {
    dispatch(
      updateSession({
        id,
        sectionIndex: sectionIndex,
        sessionIndex: sessionIndex,
        sessionName: inputRef.current.value,
      })
    );
  };
  const handleDelete = () => {
    dispatch(
      deleteSession({
        id,
        sectionIndex: sectionIndex,
        sessionIndex: sessionIndex,
      })
    );
  };
  const handleDispatch = (data) => {
    dispatch(updateContenu({ id, sectionIndex, sessionIndex, contenu: data }));
  };

  const handleVideo = useCallback(
    (e) => {
      let link = e.target.value;
      setVideoLink(e.target.value);
      if (link.includes("watch")) {
        link = link.replace("watch?v=", "embed/");
      }
      dispatch(
        updateContenu({
          id,
          sectionIndex,
          sessionIndex,
          contenu,
          video: link,
        })
      );
    },
    [videoLink]
  );

  return (
    <div className="session">
      <div className="session__title">
        <div className="session__title--left">
          <h5 className="heading-5">Session {sessionIndex + 1}:</h5>
          <FcDocument className="section__icon" />
          <input
            size={name.length}
            className="session__title--name"
            value={name}
            disabled={editable}
            ref={inputRef}
            onChange={handleChange}
          />
          <div className="session__buttons">
            <button className="session__button">
              <BsFillPencilFill onClick={handleEdit} />
            </button>
            <button className="session__button" onClick={handleDelete}>
              <MdDelete />
            </button>
          </div>
        </div>
        <div
          className={(hidden.title ? "hidden " : "") + "session__title--right"}
        >
          <button onClick={() => setHidden({ ...hidden, edit: !hidden.edit })}>
            {display ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
      </div>
      <div className={(hidden.add ? "hidden " : "") + "addcontent"}>
        <div className="addcontent__container">
          <div className="addcontent__tab">
            <div className="addcontent__tab--title">
              <h5 className="heading-5">Type de contenu</h5>
              <button
                className="addcontent__tab--close"
                onClick={() =>
                  setHidden({
                    ...hidden,
                    add: !hidden.add,
                    title: !hidden.title,
                  })
                }
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="addcontent__tabcontent">
            <div
              className="content-type"
              onClick={() => setHidden({ ...hidden, add: true, video: false })}
            >
              <AiFillPlayCircle className="icon" />
              <span>Video</span>
            </div>
            <div
              className="content-type"
              onClick={() =>
                setHidden({ ...hidden, add: true, article: false })
              }
            >
              <HiDocument className="icon" />
              <span>Article</span>
            </div>
          </div>
        </div>
      </div>
      <div className={(hidden.article ? "hidden " : "") + "article"}>
        <div className="addcontent__container">
          <div className="addcontent__tab">
            <div className="addcontent__tab--title">
              <h5 className="heading-5">Article</h5>
              <button
                className="addcontent__tab--close"
                onClick={() =>
                  setHidden({
                    ...hidden,
                    article: true,
                    title: false,
                  })
                }
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="addcontent__tabcontent">
            <div className="addcontent__editor">
              {!hidden.article ? (
                <Editorjs
                  editorId={"article-" + sectionIndex + sessionIndex}
                  editorClass="article"
                  editorData={
                    !isEmptyObject(contenu) ? JSON.parse(contenu) : ""
                  }
                  dispatcher={handleDispatch}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={(hidden.video ? "hidden " : "") + "video"}>
        <div className="addcontent__container">
          <div className="addcontent__tab">
            <div className="addcontent__tab--title">
              <h5 className="heading-5">Video</h5>
              <button
                className="addcontent__tab--close"
                onClick={() =>
                  setHidden({
                    ...hidden,
                    video: true,
                    title: false,
                  })
                }
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="addcontent__tabcontent">
            <div className="addcontent__editor">
              <div className="addcontent__video">
                {!hidden.video ? (
                  <>
                    <input
                      value={video}
                      placeholder="lien video"
                      onChange={handleVideo}
                    />
                    {video ? (
                      <iframe
                        width="420"
                        height="315"
                        src={video}
                        allowFullScreen
                      ></iframe>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={(hidden.edit ? "hidden " : "") + "editcontent"}>
        <button
          className="editcontent__btn"
          onClick={() =>
            setHidden({
              ...hidden,
              add: !hidden.add,
              edit: !hidden.edit,
              title: !hidden.title,
            })
          }
        >
          <BsFillPencilFill />
          <span>Contenu</span>
        </button>
        <button className="editcontent__btn">
          <AiOutlinePlus />
          <span>Ressources</span>
        </button>
      </div>
    </div>
  );
};

export default Session;
