import React from "react";
import "./ProjectCardContainer.css";
import { usePalette } from "react-palette";

const ProjectCardContainer = ({
  projectImage,
  projectName,
  langName,
  projectDescription,
  userName,
}) => {
  const { data } = usePalette(projectImage);
  return (
    <div style={{ background: data.lightVibrant }} className="projectsCard">
      <div className="projectImageContainer">
        <img
          className="projectImage"
          src={projectImage}
          alt="projectImage"
        ></img>
      </div>
      <div className="projectContentContainer">
        <h1 className="projectName">{projectName}</h1>
        <h3 className="userName">{userName}</h3>
        <h3 className="langName">{langName}</h3>
        <p className="projectDescription">{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCardContainer;
