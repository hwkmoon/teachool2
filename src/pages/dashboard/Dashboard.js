import React from "react";
import { useSelector } from "react-redux";

import Agenda from "./Agenda";
import Logtime from "./Logtime";
import Mescertifications from "./Mescertifications";
import Monapprentissage from "./Monapprentissage";

const Dashboard = () => {
  const theme = useSelector((state) => state.layout.theme);

  return (
    <div className="dashboard">
      <h3 className="heading-3">TABLEAU DE BORD</h3>
      <div className="dashboard-content">
        <Monapprentissage />
        <Mescertifications />
        <Agenda />
        <Logtime />
      </div>
    </div>
  );
};

export default Dashboard;
