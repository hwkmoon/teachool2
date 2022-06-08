import React from "react";
import CardDashboard from "./CardDashboard";
import { BsCalendarPlusFill } from "react-icons/bs";

const Agenda = () => {
  return (
    <div className="agenda">
      <h4 className="heading-4">Agenda</h4>
      <div className="agenda__cards">
        <CardDashboard
          texte="Call avec M.ABDELOUHABI"
          icon={<BsCalendarPlusFill />}
        />
        <CardDashboard
          texte="Call avec M.KORTBI"
          icon={<BsCalendarPlusFill />}
        />
        <CardDashboard texte="Réunion" icon={<BsCalendarPlusFill />} />
      </div>
    </div>
  );
};

export default Agenda;
