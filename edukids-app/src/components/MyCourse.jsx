import * as React from "react";
import { Component } from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GetCourses } from "../redux/action";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddCourses from "./AddCourses";

const MyCourse = ({data}) => {
  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);

  const GetCourses = async () => {
    try {
      let res = await fetch("http://localhost:3007/courses");
      if (res.ok) {
        const data = await res.json();
        setCourses(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetCourses();
  }, []);

  return (
    <>
      {courses.map((data) => (
        <Card
          className="courselists"
          style={{
            flexDirection: "column",

            display: "inline-flex",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "80px",
          }}
          sx={{ maxWidth: 300, marginTop: "50", marginLeft: "100" }}
        >
          <CardMedia
            component="img"
            height="140"
            width="250"
            image="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-english-winter-vacation-training-background-image_186800.jpg"
            alt="background"
          />
          <CardContent>
            <Typography
              style={{ fontSize: "bold" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {data.category}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Course title:{data.title}
            </Typography>
            <Button
              component={Link}
              to="/CourseDetail"
              style={{
                marginLeft: "10px",
                color: "black",
                height: "50px",
              }}
              size="small"
            >
              <ArrowForwardIosIcon />
            </Button>
          </CardContent>
          <CardActions>
            <Button style={{ marginRight: "0px" }} size="small">
              <FavoriteBorderIcon />
            </Button>
            <Button size="small">
              <DeleteOutlineIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
      <Button>
        <AddCourses />
      </Button>
    </>
  );
};
export default MyCourse;
