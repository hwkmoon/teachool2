import React from "react";
import { FaMedal } from "react-icons/fa";
import { BsCalendarPlusFill } from "react-icons/bs";
import CardDashboard from "./CardDashboard";

const Mescertifications = () => {
  return (
    <div className="mescertifications">
      <h4 className="heading-4">Mes certifications</h4>
      <div className="mescertifications__cards">
        <CardDashboard texte="SST" icon={<FaMedal />} />
        <CardDashboard texte="Javascript" icon={<FaMedal />} />
        <CardDashboard texte="React" icon={<FaMedal />} />
      </div>
    </div>
  );
};

export default Mescertifications;
