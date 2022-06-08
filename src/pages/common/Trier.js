import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Trier = () => {
  return (
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
  );
};

export default Trier;
