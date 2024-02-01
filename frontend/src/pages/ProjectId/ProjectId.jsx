import React from "react";
import { useLoaderData } from "react-router-dom";

function ProjectId() {
  const project = useLoaderData();
  return (
    <div>
      <div>Contact Me</div>
      <div>
        {project.name}
        {project.author}
      </div>
    </div>
  );
}

export default ProjectId;
