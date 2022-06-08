import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const CircularProgressWithLabel = ({ percent }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        className="progress"
        variant="determinate"
        value={percent}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" component="div" color="text.primary">
          {percent}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
