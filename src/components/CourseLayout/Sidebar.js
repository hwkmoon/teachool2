import React, { useEffect } from "react";
import Sideitem from "../Common/Sideitem";
import logo from "../../assets/img/logo.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiBookCover, GiGraduateCap } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const shortLong = useSelector((state) => state.layout.shortSidebar);
  const { courseId } = useParams();
  const courses = useSelector((state) => state.courses);
  const data = courses.find((course) => course.id === courseId);
  const sections = data.sections ? data.sections : [];
  console.log(data);

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
    <div className="sidebar sidebar-course">
      <div className="sidebar__contenu">
        <h3 className="heading-3">Contenu du cours</h3>
      </div>
      {sections.map((section, idx) => (
        <div key={idx} className="sidebar__section">
          <h4 className="heading-4">{section.sectionName}</h4>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
