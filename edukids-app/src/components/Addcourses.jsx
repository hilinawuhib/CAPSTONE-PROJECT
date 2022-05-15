import React from "react";
import ReactQuill from "react-quill";
import ReactEditor, { modules, formats } from "./ReactQuill";
import "react-quill/dist/quill.snow.css";

const AddCourse = () => {
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
              <button type="submit" className="btn btn__theme">
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCourse;
