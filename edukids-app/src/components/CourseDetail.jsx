import Grid from "@mui/material/Grid";
import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddActivity from "./AddActivity";
import MyNav from "./MyNav";
import MyCourse from "./MyCourse";

const CourseDetail = (activityId) => {
  const [show, setShow] = useState(false);
   const [activity, setActivity] = useState([]);
   const fetchActivity = async (activityId) => {
     try {
       let res = await fetch(
         "http://localhost:3007/courses/courseId/activity" + activityId
       );
      if (res.ok) {
         const data = await res.json();
         setActivity(data);
       } else {
         console.log("error");
       }
     } catch (error) {
       console.log(error);
     }
   };
   useEffect(() => {
     fetchActivity();
   }, []);

  return (
    <>
      <Box sx={{ width: 1 }}>
        <Box
          style={{ height: "100%" }}
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
        >
          <Box
            style={{
              backgroundColor: "rgb(223, 252, 252)",
              width: "23vw",
              height: "100vh",
            }}
            gridColumn="span 4"
          >
            <h3></h3>
            <Button
              onClick={() => setShow((prev) => !prev)}
              style={{
                display: "flex",
                color: "black",
                margin: "auto",
                marginTop: "30px",
              }}
            >
              <AddIcon />
              <h4>Add Activity</h4>
            </Button>
          </Box>
          {show && (
            <Box style={{ width: "75vw", height: "100vh" }} gridColumn="span 4">
              <AddActivity />
            </Box>
          )}
        </Box>
        <h4>{activity.text}</h4>
      </Box>
    </>
  );
};

export default CourseDetail;
