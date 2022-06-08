import React from "react";

const Sideitem = ({ name, icon }) => {
  return (
    <div className="sidebar__item">
      <div className="sidebar__item-icon">{icon}</div>
      <h4 className="heading-4 sidebar__item-name">{name}</h4>
    </div>
  );
};

export default Sideitem;
