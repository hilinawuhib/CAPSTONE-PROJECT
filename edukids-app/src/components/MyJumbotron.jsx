import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
  height: "80%",
});

const MyJumbotron = () => {
  return (
    <Paper>
      <Grid>
        <Grid item>
          <Img
            alt="img"
            src="https://www.lingoace.com/sg/wp-content/uploads/sites/7/2021/06/shutterstock_1977650486-copy.jpg"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default MyJumbotron;
