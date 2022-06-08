import React from "react";
import { Tooltip, Typography } from "@mui/material";

const Logtime = () => {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const hours = "8h58";
  return (
    <div className="logtime">
      <h4 className="heading-4">Logtime</h4>
      <table className="logtime__stats">
        <tbody>
          <tr>
            <th>Total</th>
            <th>Mois</th>
            <th>Semaine</th>
            <th>Aujourd'hui</th>
          </tr>
          <tr>
            <td>150h</td>
            <td>80h</td>
            <td>35h</td>
            <td>8h</td>
          </tr>
        </tbody>
      </table>
      <div className="logtime__lastdays">
        {days.map((day, idx) => (
          <Tooltip
            key={idx}
            className="logtime__hover"
            title={<Typography fontSize={15}>{day}</Typography>}
            arrow
            placement="top"
          >
            <div className="logtime__day">
              <span>{day}</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Logtime;
