import React, { useEffect } from "react";
import Sideitem from "../Common/Sideitem";
import logo from "../../assets/img/logo.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiBookCover, GiGraduateCap } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const shortLong = useSelector((state) => state.layout.shortSidebar);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const names = document.querySelectorAll(".sidebar__item-name");
    const icons = document.querySelectorAll(".sidebar__item-icon");
    const logo = document.querySelector(".logo__title");
    if (shortLong) {
      sidebar.classList.add("sidebar-short");
      [...names].map((item) => (item.style.display = "none"));
      // [...icons].map((item) => (item.style.fontSize = "2.5rem"));
      logo.style.display = "none";
    } else {
      sidebar.classList.remove("sidebar-short");
      [...names].map((item) => (item.style.display = "block"));
      logo.style.display = "block";
    }
  });
  return (
    <div className="sidebar sidebar-formateur">
      <div className="logo">
        <img className="logo__image" src={logo} alt="logo" />
        <h3 className="logo__title heading-3">teachool</h3>
      </div>
      <div className="sidebar__menu-formateur">
        <Link to="/formateur/cours" className="sidebar__link">
          <Sideitem name="Cours" icon={<GiBookCover />} />
        </Link>
        <Link to="/formateur/communication" className="sidebar__link">
          <Sideitem name="Communication" icon={<MdOutlineMessage />} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
