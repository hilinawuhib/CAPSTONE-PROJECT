import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Moreinfo = () => {
  return (
    <div style={{ display: "inline-block" }}>
      <h2
        style={{
          marginTop: "50px",
          textAlign: "left",
          marginLeft: "50px",
          textAlign: "center",
        }}
      >
        Most Popular Courses
      </h2>
      <Card
        sx={{ maxWidth: 300 }}
        style={{
          marginTop: "50px",
          marginLeft: "50px",
          marginBottom: "100px",
          display: "inline-block",
        }}
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
            </p>
            <Button size="small">Learn More</Button>
          </div>
        </CardActions>
      </Card>
      <Card
        sx={{ maxWidth: 300 }}
        style={{
          marginTop: "50px",
          marginLeft: "50px",
          marginBottom: "100px",
          display: "inline-block",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          borderRadius="50%"
          width="100"
          image="https://digest.bps.org.uk/wp-content/uploads/2019/05/gettyimages-639407632.jpg"
          alt="image"
        />

        <CardActions>
          <div>
            <h3>Science</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </p>
            <Button size="small">Learn More</Button>
          </div>
        </CardActions>
      </Card>
      <Card
        sx={{ maxWidth: 300 }}
        style={{
          marginTop: "50px",
          marginLeft: "50px",
          marginBottom: "100px",
          display: "inline-block",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          borderRadius="50%"
          width="100"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-FUr0RemTRaNUjGRoG3u1zJkfI5xYqU3KA&usqp=CAU"
          alt="image"
        />

        <CardActions>
          <div>
            <h3>English</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </p>
            <Button size="small">Learn More</Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};
export default Moreinfo;
