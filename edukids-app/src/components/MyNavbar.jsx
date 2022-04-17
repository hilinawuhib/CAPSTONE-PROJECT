import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

// const pages = ["Home", "About", "Courses"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MyNavBar = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "rgb(244, 244, 247)", color: "#000000", height: 80 }}
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
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="logo"
              src="./edulogos.png"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              to="/"
              textAlign="center"
              sx={{ my: 2, color: "black" }}
            >
              Home
            </Button>
            {/* <Button
              component={Link}
              to="/About"
              textAlign="center"
              sx={{ my: 2, color: "black" }}
            >
              About
            </Button> */}
            <Button
              component={Link}
              to="/courses"
              textAlign="center"
              sx={{ my: 2, color: "black" }}
            >
              Courses
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyNavBar;
