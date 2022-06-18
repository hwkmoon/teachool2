import React from "react";
import CardCourse from "./CardCourse";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Trier from "../common/Trier";
import Search from "../common/Search";

const Mescours = () => {
  return (
    <div className="mescours">
      <h3 className="heading-3">MES COURS</h3>
      <div className="mescours-content">
        <div className="mescours__input">
          <Trier />
          <Search />
        </div>
        <div className="mescours__cards">
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </div>
      </div>
    </div>
  );
};

export default Mescours;
