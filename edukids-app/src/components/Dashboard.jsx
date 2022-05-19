import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Dashboard = () => {
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

            <h4>Dashboard</h4>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        style={{ height: "100%" }}
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
      >
        <Box
          style={{
            backgroundColor: "white",
            width: "20vw",
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
              marginTop: "10%",
            }}
          >
            <HomeIcon />
            <span>Home</span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "25%",
              marginTop: "10%",
            }}
          >
            <LibraryBooksIcon />
            <span >Courses</span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginLeft: "25%",
              marginTop: "10%",
            }}
          >
            <AccountBoxIcon />
            <span>Profile</span>
          </div>
        </Box>
      </Box>
    </div>
  );
};
export default Dashboard;
