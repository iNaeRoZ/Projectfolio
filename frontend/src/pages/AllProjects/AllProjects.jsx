import React from "react";
import { useLoaderData } from "react-router-dom";

import "./AllProjects.css";

function AllProjects() {
  const projects = useLoaderData();

  return (
    <div>
      <article className="list">
        {projects.map((project) => (
          <div className="container">
            <img
              className="img-container"
              src={project.image}
              alt={project.image}
            />
            <h2>{project.name}</h2>
            <h3>{project.author}</h3>
          </div>
        ))}
      </article>
    </div>
  );
}

export default AllProjects;
