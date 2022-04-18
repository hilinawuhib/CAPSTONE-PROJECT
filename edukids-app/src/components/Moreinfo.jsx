import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Moreinfo = () => {
  return (
    <div>
      <Card
        sx={{ maxWidth: 300 }}
        style={{ marginTop: "50px", marginLeft: "50px",marginBottom:"100px" }}
      >
        <CardMedia
          component="img"
          height="200"
          image="http://www.goodnet.org/photos/620x0/31058_hd.jpg"
          alt="image"
        />

        <CardActions>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
            venenatis.
          </p>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
};
export default Moreinfo;
