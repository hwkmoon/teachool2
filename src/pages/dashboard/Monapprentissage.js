import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import CardCourse from "./CardCourse";
const Monapprentissage = () => {
  return (
    <div className="monapprentissage">
      <h4 className="heading-4">Mon apprentissage</h4>
      <FormControl className="trier">
        <InputLabel id="demo-simple-select-autowidth-label">Trier</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          label="Trier"
        >
          <MenuItem value={10}>Titre: A à Z</MenuItem>
          <MenuItem value={21}>Titre: Z à A</MenuItem>
          <MenuItem value={22}>Récemments consultés</MenuItem>
        </Select>
      </FormControl>
      <div className="monapprentissage__cards">
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
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
  );
};

export default Monapprentissage;
