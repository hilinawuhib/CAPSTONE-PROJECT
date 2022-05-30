import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@mui/material/TextField";
import Backdrop from "@material-ui/core/Backdrop";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Box from "@mui/material/Box";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddCourses = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState({
    title: "",
    category: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInput = (fieldName, value) => {
    setCourses({
      ...courses,
      [fieldName]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:3007/courses", {
        method: "POST",
        body: JSON.stringify(courses),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (res.ok) {
        setCourses({
          title: "",
          category: "",
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <AddIcon sx={{ fontSize: 50 }} />
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>Add courses</h2>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <h5>Course Title</h5>
              <TextField
                variant="outlined"
                color="primary"
                focused
                margin="normal"
                required
                fullWidth
                label="course title "
                name="course title "
                autoComplete="course title "
                autoFocus
                value={courses.title}
                onChange={(e) => {
                  handleInput("title", e.target.value);
                }}
              />
              <h5>Course Category </h5>
              <TextField
                variant="outlined"
                focused
                margin="normal"
                required
                fullWidth
                name="course category"
                label="course category"
                type="course category"
                id="course category"
                autoComplete="course category"
                value={courses.category}
                onChange={(e) => {
                  handleInput("category", e.target.value);
                }}
              />
              <Button type="submit">Add</Button>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddCourses;
