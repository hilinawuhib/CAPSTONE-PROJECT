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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Link } from "react-router-dom";

// const pages = ["Home", "About", "Courses"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MyNav = () => {
  return (
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
            <Button
              component={Link}
              to="/"
              style={{
                marginLeft: "30px",
                color: "black",
              }}
            >
              Home
            </Button>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyNav;
