import React from "react";
import ReactQuill from "react-quill";
import Button from "@mui/material/Button";
import ReactEditor, { modules, formats } from "./ReactQuill";
import "react-quill/dist/quill.snow.css";

const AddActivity = () => {
  return (
    <div className="container">
      <div className="content">
        <h4>Add Activity </h4>
        <form>
          <div>
            <div className=" box-content-2 form-group col-md-12 editor">
              <ReactEditor toolbarId={"t3"} />
              <ReactQuill
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
