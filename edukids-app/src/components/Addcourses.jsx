import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Addcourses = () => {
  return (
    <div>
      <h4 style={{ marginTop: "50px" }}> Course Details</h4>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <h4> Course Name</h4>
        <TextField
          style={{ width: "500px" }}
          helperText="Please enter the course  name"
          id="demo-helper-text-misaligned"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <h4> Course Category</h4>
        <TextField
          style={{ width: "500px" }}
          helperText="Please enter the course category "
          id="demo-helper-text-misaligned"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <h4> Content </h4>
        <TextField
          style={{ width: "500px" }}
          helperText="Please enter the content description"
          id="demo-helper-text-misaligned"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <h4> Course material </h4>
        <TextField
          style={{ width: "500px" }}
          helperText="Please upload the content material"
          id="demo-helper-text-misaligned"
        />
      </Box>
    </div>
  );
};
export default Addcourses;
