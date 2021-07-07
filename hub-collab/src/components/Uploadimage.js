import React, { Component } from "react";
import "./Uploadimage.css";

class FileUploadButton extends Component {
  state = { selectedFile: null };
  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  uploadHandler = () => {
    console.log(this.state.selectedFile);
  };

  render() {
    return (
      <div>
        <h3> Upload Profile Picture </h3>
        <React.Fragment>
          <input
            type="file"
            onChange={this.fileChangedHandler}
            accept="image/*"
          />
          {/* <button onClick={this.uploadHandler}>Upload!</button> */}
        </React.Fragment>
      </div>
    );
  }
}

export default FileUploadButton;
