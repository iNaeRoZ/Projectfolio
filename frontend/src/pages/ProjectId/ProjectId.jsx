import React from "react";
import { useLoaderData } from "react-router-dom";

import "./ProjectId.css";

function ProjectId() {
  const project = useLoaderData();
  return (
    <div className="container-id">
      <div>Contact Me</div>
      <div>
        {project.name}
        {project.author}
      </div>
    </div>
  );
}

export default ProjectId;
