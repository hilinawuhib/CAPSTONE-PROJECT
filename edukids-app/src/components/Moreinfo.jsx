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
      <h2 style={{ marginTop: "50px", textAlign: "left", marginLeft: "50px" }}>
        Popular courses
      </h2>
      <Card
        sx={{ maxWidth: 300 }}
        style={{ marginTop: "50px", marginLeft: "50px", marginBottom: "100px" }}
      >
        <CardMedia
          component="img"
          height="200"
          borderRadius="50%"
          width="100"
          image="https://images.indianexpress.com/2019/01/mathematics.jpg"
          alt="image"
        />

        <CardActions>
          <div>
            <h3>Math</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus.
            </p>
            <Button size="small">Learn More</Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};
export default Moreinfo;
