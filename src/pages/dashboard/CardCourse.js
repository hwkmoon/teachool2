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
  CircularProgress,
} from "@mui/material";
import javascript from "../../assets/img/javascript1.jpg";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

const CardCourse = () => {
  return (
    <Card className="card-course">
      <CardActionArea>
        <CardMedia
          className="image"
          component="img"
          src={javascript}
          alt="Javascript"
        />
        <CardContent>
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
            <CircularProgressWithLabel percent={87} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCourse;
