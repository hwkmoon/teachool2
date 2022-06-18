import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "../Common/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const layout = useSelector((state) => state.layout);
  const shortLong = useSelector((state) => state.layout.shortSidebar);
  const theme = useSelector((state) => state.layout.theme);

  const sidebarShort = () => {
    // const main = document.querySelector(".main-content");
    // if (shortLong) main.classList.add("main-content-short");
    // else main.classList.remove("main-content-short");
    const container = document.querySelector(".container");
    if (shortLong) container.classList.add("container-short");
    else container.classList.remove("container-short");
  };

  const changeTheme = () => {
    const main = document.querySelector(".main-content");
    if (theme === "day") main.classList.remove("main-content-dark");
    else main.classList.add("main-content-dark");
  };

  useEffect(() => {
    sidebarShort();
    changeTheme();
  }, [layout]);

  return (
    <div className="container">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
