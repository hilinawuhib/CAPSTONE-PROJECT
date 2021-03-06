import React from "react";
import AppBar from "@mui/material/AppBar";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import uniqid from "uniqid";
import MyCourse from "./MyCourse";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Dashboard = () => {
  const [showCourses, setShowCourses] = useState(false);
 
  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "white", color: "#000000", height: 70 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h1"
              noWrap
              component="div"
              sx={{ mr: 3, display: { xs: "none", md: "flex" } }}
            >
              <Box
                component="img"
                sx={{
                  height: 40,
                  width: 120,
                  maxHeight: { xs: 233, md: 150 },
                  maxWidth: { xs: 350, md: 200 },
                }}
                alt="logo"
                src="./edulogos.png"
              />
            </Typography>

            {/*  <h4>Dashboard</h4> */}
            <Button
              component={Link}
              to="/"
              style={{
                marginLeft: "3%",
                color: "black",
                height: "50px",
              }}
            >
              <h4>Home</h4>
            </Button>
            <Button
              onClick={() => setShowCourses((prev) => !prev)}
              style={{
                marginLeft: "3%",
                color: "black",
                height: "50px",
              }}
            >
              <h4>Courses</h4>
            </Button> 

            <Box sx={{ flexGrow: 0, marginLeft: 2 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Paper
                
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <InputBase
                    
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search "
                    />
                    <IconButton
                      type="submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                    <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    />
                  </Paper>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {showCourses && (
          <Box style={{ width: "100vw", height: "100vh" }} gridColumn="span 4">
            <MyCourse />
          </Box>
        )}
     

      {/* <Box
        style={{ height: "100vh" }}
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
      >
        <Box
          style={{
            backgroundColor: "white",
            width: "25vw",
            height: "100vh",
          }}
          gridColumn="span 3"
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "25%",
              marginTop: "35px",
            }}
          >
            <HomeIcon />
            <Button
              component={Link}
              to="/"
              style={{
                marginLeft: "10%",
                color: "black",
                height: "50px",
              }}
            >
              <h4>Home</h4>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "25%",
            }}
          >
            <LibraryBooksIcon />
            <Button
              onClick={() => setShowCourses((prev) => !prev)}
              style={{
                marginLeft: "10%",
                color: "black",
                height: "50px",
              }}
            >
              <h4>Courses</h4>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "25%",
            }}
          >
            <AccountBoxIcon />
            <Button
              style={{
                marginLeft: "10%",
                color: "black",
                height: "50px",
              }}
            >
              <h4>Profile</h4>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "25%",
            }}
          >
            <InfoIcon />
            <Button
              style={{
                marginLeft: "10%",
                color: "black",
                height: "50px",
              }}
            >
              <h4>About</h4>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "25%",
            }}
          >
            <SettingsIcon />
            <Button
              style={{
                marginLeft: "10%",
                color: "black",
                height: "50px",
              }}
            >
              <h4>Setting</h4>
            </Button>
          </div>
          <div
            style={{
              display: "flex",

              alignItems: "center",
              marginLeft: "25%",
            }}
          >
            <QuestionMarkIcon />
            <Button
              style={{
                marginLeft: "10%",
                color: "black",
                height: "50px",
              }}
            >
              <h4>FAQ</h4>
            </Button>
          </div>
        </Box>
        {showCourses && (
          <Box style={{ width: "70vw", height: "100vh" }} gridColumn="span 4">
            <MyCourse />
          </Box>
        )}
      </Box> */}
    </div>
  );
};
export default Dashboard;
