import React from "react";
import Bell from "../Common/Bell";
import NightDay from "../Common/NightDay";
import Hamburger from "../Common/Hamburger";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Profile from "../Common/Profile";

const Header = () => {
  const shortLong = useSelector((state) => state.layout.shortSidebar);

  useEffect(() => {
    const header = document.querySelector(".header");
    if (shortLong) header.classList.add("header-short");
    else header.classList.remove("header-short");
  });

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  return (
    <>
      {/* <input id="menu-toggle" type="checkbox" hidden /> */}
      <div className="header">
        {/* <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label> */}
        <Hamburger />
        <div className="settings">
          <NightDay />
          <div
            className="settings__fullscreen"
            onClick={() => toggleFullscreen()}
          >
            <i className="bx bx-fullscreen"></i>
          </div>
          <div className="settings__notification">
            <Bell numAlerts={10} />
          </div>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Header;
