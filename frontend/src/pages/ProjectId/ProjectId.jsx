import React from "react";
import { useLoaderData } from "react-router-dom";

import "./ProjectId.css";

function ProjectId() {
  const project = useLoaderData();
  return (
    <div className="container-id">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.image} />
      <p>Made by</p>
      <div>{project.author}</div>
      <p>Time</p>
      <div>{project.date}</div>
      <p>The objectve was</p>
      <div>{project.description}</div>
    </div>
  );
}

export default ProjectId;
