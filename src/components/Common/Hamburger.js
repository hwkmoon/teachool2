import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/layoutSlice";

const Hamburger = () => {
  const shortLong = useSelector((state) => state.layout.shortSidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    if (shortLong)
      hamburger.classList.replace("menu-button", "menu-button--open");
    else hamburger.classList.replace("menu-button--open", "menu-button");
  });

  const toggleHamburger = () => {
    dispatch(toggleSidebar(!shortLong));
    // const hamburger = document.getElementById("hamburger");
    // if (shortLong)
    //   hamburger.classList.replace("menu-button", "menu-button--open");
    // else hamburger.classList.replace("menu-button--open", "menu-button");
    // // hamburger.classList.toggle("menu-button--open");
  };

  return (
    <div className="menu-button-container" onClick={toggleHamburger}>
      <div id="hamburger" className="menu-button"></div>
    </div>
  );
};

export default Hamburger;
