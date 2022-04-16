// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import ButtonBase from "@mui/material/ButtonBase";

// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   width: "100%",
//   height: "100%",
// });

// const MyJumbotron = () => {
//   return (
//     <Paper>
//       <Grid>
//         <Grid item>
//           <Img
//             alt="img"
//             src="https://www.lingoace.com/sg/wp-content/uploads/sites/7/2021/06/shutterstock_1977650486-copy.jpg"
//           />

//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };
// export default MyJumbotron;
import React from "react";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";
const MyJumbotron = () => {
  return (
    <Card>
      <div style={{ position: "relative" }}>
        <CardMedia
          style={{ height: "100%", width: "100%" }}
          component="img"
          image={
            "https://www.lingoace.com/sg/wp-content/uploads/sites/7/2021/06/shutterstock_1977650486-copy.jpg"
          }
          title="images"
          alt="image"
        />
        <div
          style={{
            fontSize:"30px",
            width:"30%",
            position: "absolute",
            color: "black",
            top: 150,
            left: "10%",
            fontWeight:"bold"
            
          }}
        >
          {" "}
          About Us
          
        </div>
        <div
          style={{
            fontSize:"15px",
            width:"30%",
            position: "absolute",
            color: "black",
            top:200,
            left: "10%",
            
          }}
        >
          {" "}
         
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat
          urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
          venenatis.
        </div>
       
      </div>
    </Card>
  );
};
export default MyJumbotron;
