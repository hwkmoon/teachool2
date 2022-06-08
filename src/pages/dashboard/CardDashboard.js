import React from "react";

const CardDashboard = ({ icon, texte }) => {
  return (
    <div className="card-dashboard">
      <div className="day">
        <span>25</span>
        <span className="month">JAN</span>
      </div>
      <div className="content">
        <p>{texte}</p>
      </div>
      <div className="icon">{icon}</div>
    </div>
  );
};

export default CardDashboard;
