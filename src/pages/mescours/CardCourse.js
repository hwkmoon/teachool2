import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import javascript from "../../assets/img/javascript1.jpg";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

const CardCourse = () => {
  return (
    <Card className="card-mescours">
      <CardActionArea className="actionarea">
        <CardMedia
          className="image"
          component="img"
          src={javascript}
          alt="Javascript"
        />
        <CardContent className="content">
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="div"
          >
            Javascript
          </Typography>
          <div className="infos">
            <div className="infos__duration">
              <GiSandsOfTime className="infos__icon" />
              <span className="infos__time">6 semaines</span>
            </div>
            <LinearProgressWithLabel percent={87} />
          </div>
          <div className="continuer">Continuer</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCourse;
