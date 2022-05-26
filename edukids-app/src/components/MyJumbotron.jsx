import React from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { CardMedia } from "@material-ui/core";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const MyJumbotron = () => {
  return (
    <Card>
      <div style={{ position: "relative" }}>
        <CardMedia
          style={{ height: "70%", width: "100%" }}
          component="img"
          image={
            "https://www.lingoace.com/sg/wp-content/uploads/sites/7/2021/06/shutterstock_1977650486-copy.jpg"
          }
          title="images"
          alt="image"
        />
        <div
          style={{
            fontSize: "65px",
            width: "30%",
            position: "absolute",
            color: "black",
            top: 150,
            left: "10%",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {" "}
          Edukids
        </div>
        <div
          style={{
            fontSize: "18px",
            width: "30%",
            position: "absolute",
            color: "black",
            top: 220,
            left: "10%",
            textAlign: "left",
          }}
        >
          {" "}
          <h3>
            {" "}
            Free , Fun and Easy learning management system for kids - enjoy the
            difference with our worldclass Tutors!
          </h3>
          <h3>For more info Register now!</h3>
          <Button
            component={Link}
            to="/register"
            style={{
              color: "black",
              top: 20,
              fontWeight: "bold",
            }}
            variant="outlined"
          >
        <p>Register here </p> 
          </Button>
           {/* <Button
            style={{
              color: "black",
              top: 20,
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            variant="outlined"
          >
            I am a teacher
          </Button>  */}
        </div>
        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid
              item
              xs={8}
              style={{
                fontSize: "15px",
                width: "50%",

                color: "black",
                top: 200,
                left: 100,
              }}
            >
              <h4>About us</h4>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Quisque nisl eros, pulvinar facilisis justo
                mollis, auctor consequat urna. Morbi a bibendum metus. Donec
                scelerisque sollicitudin enim eu venenatis.
              </h4>
            </Grid>
            <Grid item xs={3}>
              <h4> some image here </h4>
            </Grid>
          </Grid>
        </Box> */}
      </div>
    </Card>
  );
};
export default MyJumbotron;
