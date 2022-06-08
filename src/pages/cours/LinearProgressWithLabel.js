import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

const LinearProgressWithLabel = ({ percent }) => {
  return (
    <Box className="progressbar">
      <LinearProgress
        className="progress"
        variant="determinate"
        value={percent}
      />
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="h6" component="div" color="text.primary">
          {percent}
        </Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabel;
