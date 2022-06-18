import React from "react";
import Bell from "../Common/Bell";
import Profile from "../Common/Profile";
import Hamburger from "../Common/Hamburger";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <>
      <div className="header header-course">
        <div className="header-left">
          <div className="logo">
            <img className="logo__image" src={logo} alt="logo" />
            <h3 className="logo__title heading-3">teachool</h3>
          </div>
        </div>

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
