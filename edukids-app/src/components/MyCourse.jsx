import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const MyCourse = () => {
  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    try {
      const res = await fetch(" http://localhost:3007/courses");
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setCourses(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      {courses.map((c) => (
        <Card
           style={{
             flexDirection:"column",

             display:"inline-flex",
             marginLeft:"100px",
             marginRight:"100px",
             marginTop:"100px"
          //   fontSize: "30px",
          //   width: "30%",
          //   position: "absolute",
          //   color: "black",
          //   top: 150,
          //   left: "10%",
          //   fontWeight: "bold",
          //   textAlign: "left",
           }}
          sx={{ maxWidth: 350, marginTop: "50", marginLeft: "100" }}
        >
          <CardMedia
            component="img"
            height="140"
            image="https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-admissions-training-course-flyer-image_254831.jpg"
            alt="background"
          />
          <CardContent>
            <Typography style={{fontSize:"bold"}} gutterBottom variant="h5" component="div">
              {c.category}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Course title:{c.title}
            </Typography>
            <Button component={Link}
            to="/CourseDetail"size="small">Details</Button>
          </CardContent>
          <CardActions>
           
            <Button style={{marginRight:"0px"}} size="small">
            <FavoriteBorderIcon/>
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
export default MyCourse;
