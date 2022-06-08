import React from "react";
import { Badge } from "@mui/material";

const Bell = ({ numAlerts }) => {
  if (numAlerts)
    return (
      <Badge
        color="secondary"
        className="settings__badge"
        badgeContent={numAlerts}
      >
        <i className="bx bx-bell bx-tada"></i>
      </Badge>
    );
  else
    return (
      <Badge
        color="secondary"
        className="settings__badge"
        badgeContent={numAlerts}
      >
        <i className="bx bx-bell"></i>
      </Badge>
    );
};

export default Bell;
