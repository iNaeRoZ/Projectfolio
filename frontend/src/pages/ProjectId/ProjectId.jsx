import React from "react";
import { useLoaderData } from "react-router-dom";

function ProjectId() {
  const project = useLoaderData();
  return (
    <div className="nav_bar">
      <div>Contact Me</div>
      <div>{project.name}</div>
    </div>
  );
}

export default ProjectId;
