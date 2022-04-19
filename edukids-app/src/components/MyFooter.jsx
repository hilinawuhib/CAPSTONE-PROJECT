import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const MyFooter = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <hr />
      <Grid container spacing={1}>
        <Grid item xs={4} md={4}>
          <h4>EduKids</h4>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </Grid>
        <Grid item xs={4} md={4}>
          <h4>EduKids</h4>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </Grid>
        <Grid item xs={4} md={4}>
          <h4>EduKids</h4>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </Grid>
        <Grid item xs={6} md={8}>
          <h4>EduKids</h4>
        </Grid>
        <Grid item xs={6} md={4}>
          <h4 style={{ fontWeight: "bold", marginLeft: "80px" }}>
            <FacebookIcon /> <TwitterIcon />
            <InstagramIcon />
          </h4>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MyFooter;
