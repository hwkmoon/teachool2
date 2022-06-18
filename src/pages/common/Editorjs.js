import React, { useRef, useEffect } from "react";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import SimpleImage from "@editorjs/simple-image";

const Editorjs = ({ editorId, editorData, dispatcher, editorClass }) => {
  const ejInstance = useRef();

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      if (ejInstance.current) {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: editorId,
      placeholder: "Let`s write an awesome story!",
      data: editorData,
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
        const cleanData = JSON.stringify(outputData);
        console.log(cleanData);
        dispatcher(cleanData);
      },
    });
  };
  return <div className={editorClass} id={editorId}></div>;
};

export default Editorjs;
