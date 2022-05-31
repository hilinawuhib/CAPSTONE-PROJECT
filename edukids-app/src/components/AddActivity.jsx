import React from "react";
import ReactQuill from "react-quill";
import Button from "@mui/material/Button";
import { useState } from "react";
import ReactEditor, { modules, formats } from "./ReactQuill";
import "react-quill/dist/quill.snow.css";

const AddActivity = (courseId) => {
  const [activity, setActivity] = useState({
    text: "",
  });

  const handleInput = (fieldName, value) => {
    setActivity({
      ...activity,
      [fieldName]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch(
        "http://localhost:3007/courses/" + courseId + "/activity",
        {
          method: "POST",
          body: JSON.stringify(activity),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (res.ok) {
        setActivity({
          text: "",
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h4>Add Activity </h4>
        <form>
          <div>
            <div className=" box-content-2 form-group col-md-12 editor">
              <ReactEditor onSubmit={handleSubmit} toolbarId={"t3"} />
              <ReactQuill
                value={activity.text}
                onChange={(e) => {
                  handleInput("text", e.target.value);
                }}
                theme="snow"
                placeholder={"course content goes here"}
                modules={modules("t3")}
                formats={formats}
              />
            </div>
            <br />

            <br />

            <div className="form-group col-sm-12 text-right">
              <Button
                onSubmit={handleSubmit}
                style={{
                  marginLeft: "10px",
                  color: "black",
                  height: "30px",
                  backgroundColor: "grey",
                }}
                type="submit"
                className="btn btn__theme"
              >
                <h4
                  style={{
                    color: "white",
                  }}
                >
                  {" "}
                  Add{" "}
                </h4>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddActivity;
