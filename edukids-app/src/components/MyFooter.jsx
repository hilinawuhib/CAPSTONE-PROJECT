import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const MyFooter = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <hr />
      <Grid container spacing={1}>
        <Grid item xs={4} md={4}>
          <h4 style={{ textAlign: "center" }}> About Us </h4>
          <p style={{ marginLeft: "80px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Grid>
        <Grid item xs={6} md={6}>
          <h4>Contact us </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "50%",
            }}
          >
            <LocationOnIcon />
            <Button
              style={{
                marginLeft: "10px",
                color: "black",
                height: "50px",
              }}
            >
              <h4>location will go here</h4>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "50%",
            }}
          >
            <AlternateEmailIcon />
            <Button
              style={{
                marginLeft: "10px",
                color: "black",
                height: "50px",
              }}
            >
              <h4>edukids@gmail.com</h4>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "50%",
            }}
          >
            <ContactPhoneIcon />
            <Button
              style={{
                marginLeft: "10px",
                color: "black",
                height: "50px",
              }}
            >
              <h4>+123 456 7897</h4>
            </Button>
          </div>
        </Grid>

        <Grid item xs={6} md={4}>
          <h4 style={{ fontWeight: "bold", marginLeft: "80px" }}>
            <FacebookIcon sx={{ marginRight: 5 }} />{" "}
            <TwitterIcon sx={{ marginRight: 5 }} />
            <InstagramIcon sx={{ marginRight: 5 }} />
            <LinkedInIcon />
          </h4>
        </Grid>
        <Grid item xs={6} md={8}>
          <h4>EduKids</h4>
        </Grid>
        <Grid item xs={12} md={12}>
          Created by: Hilina
        </Grid>
      </Grid>
    </Box>
  );
};
export default MyFooter;
