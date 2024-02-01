import React from "react";
import { useLoaderData } from "react-router-dom";

import "./AllProjects.css";

function AllProjects() {
  const projects = useLoaderData();

  return (
    <div>
      <div>Contact</div>
      <article className="list">
        {projects.map((project) => (
          <div className="container">
            <h2>{project.name}</h2>
            <h3>{project.author}</h3>
            <img src={project.image} alt={project.image} />
          </div>
        ))}
      </article>
    </div>
  );
}

export default AllProjects;
