import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const layout = useSelector((state) => state.layout);
  const shortLong = useSelector((state) => state.layout.shortSidebar);

  const saveLocalLayout = () => {
    localStorage.setItem("layout", JSON.stringify(layout));
  };

  const sidebarShort = () => {
    // const main = document.querySelector(".main-content");
    // if (shortLong) main.classList.add("main-content-short");
    // else main.classList.remove("main-content-short");
    const container = document.querySelector(".container");
    if (shortLong) container.classList.add("container-short");
    else container.classList.remove("container-short");
  };

  useEffect(() => {
    sidebarShort();
    saveLocalLayout();
  }, [layout]);

  return (
    <div className="container">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
