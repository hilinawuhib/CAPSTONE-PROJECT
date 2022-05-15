import Grid from "@mui/material/Grid";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddCourse from "./Addcourses";
import MyNav from "./MyNav";

const CourseDetail = () => {
  return (
    <Box sx={{ width: 1 }}>
      <MyNav />
      <Box
        style={{ height: "100%" }}
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
      >
        <Box
          style={{
            backgroundColor: "rgb(211, 237, 241)",
            width: "25vw",
            height: "100vh",
          }}
          gridColumn="span 4"
        >
          <h2>Mathematics</h2>
          <p>Addition</p>
          <hr />

          <Button
            component={Link}
            to="/addcourses"
            style={{
              display: "flex",
              color: "black",
              margin: "auto",
              marginTop: "30px",
            }}
          >
            <AddIcon />
            Add Activity
          </Button>
        </Box>
        <Box style={{ width: "75vw", height: "100vh" }} gridColumn="span 4">
          <AddCourse />
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetail;
