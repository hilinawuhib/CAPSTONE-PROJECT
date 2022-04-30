import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
const MyCourse = () => {
  return (
    <>
      <Card  style={{
            fontSize: "30px",
            width: "30%",
            position: "absolute",
            color: "black",
            top: 150,
            left: "10%",
            fontWeight: "bold",
            textAlign: "left",
          }} sx={{ maxWidth: 345 ,marginTop:"50" ,marginLeft:"100"}}>
        <CardMedia
       
          component="img"
         
          height="140"
          image="https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-admissions-training-course-flyer-image_254831.jpg"
          alt="background"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Courses
          </Typography>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link}
            to="/coursedetail"size="small"><AddIcon/></Button>
        </CardActions>
      </Card>
    </>
  );
};
export default MyCourse;
