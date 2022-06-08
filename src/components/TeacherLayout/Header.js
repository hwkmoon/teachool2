import React from "react";
import Bell from "../Common/Bell";
import Profile from "../Common/Profile";
import Hamburger from "../Common/Hamburger";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
  const shortLong = useSelector((state) => state.layout.shortSidebar);

  useEffect(() => {
    const header = document.querySelector(".header");
    if (shortLong) header.classList.add("header-short");
    else header.classList.remove("header-short");
  });

  return (
    <>
      <div className="header header-formateur">
        <Hamburger />
        <div className="settings">
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
