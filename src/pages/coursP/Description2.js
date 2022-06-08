import React, { useState, useRef, useEffect } from "react";
import MenuModifier from "./MenuModifier";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import SimpleImage from "@editorjs/simple-image";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDescription } from "../../features/coursesSlice";

const Description = () => {
  const ejInstance = useRef();
  const { courseId } = useParams();
  const [title, setTitle] = useState("");

  const courses = useSelector((state) => state.courses);

  const saveLocalCourses = () => {
    console.log("Saving");
    console.log(courses);
    localStorage.setItem("courses", JSON.stringify(courses));
  };

  const editorData = courses.find(
    (course) => course.id === courseId
  ).description;

  const dispatch = useDispatch();

  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Let`s write an awesome story!",
      data: editorData ? JSON.parse(editorData) : "",
      tools: {
        header: Header,
        list: List,
        image: SimpleImage,
        quote: Quote,
        code: CodeTool,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
            },
          },
        },
      },
      /**
       * onReady callback
       */
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        const outputData = await editor.save();
        console.log(outputData);
        const cleanData = JSON.stringify(outputData);
        dispatch(
          updateDescription({
            id: courseId,
            title: title,
            description: cleanData,
          })
        );
      },
      autofocus: true,
    });
  };

  const handleSubmit = () => {
    saveLocalCourses();
  };

  return (
    <div className="modifiercours">
      <MenuModifier />
      <div className="modifiercours-content">
        <div className="modifiercours__title">
          <h3 className="heading-3">Description</h3>
        </div>
        <form className="modifiercours__form" onSubmit={handleSubmit}>
          <div className="modifiercours__input">
            <label>Titre du cours</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre du cours..."
            ></input>
          </div>
          <div className="modifiercours__editor">
            <label>Description du cours</label>
            <div id="editorjs"></div>
          </div>
          <button>Sauvegarder</button>
        </form>
      </div>
    </div>
  );
};

export default Description;
