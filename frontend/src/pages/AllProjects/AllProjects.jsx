import React from "react";
import { useLoaderData } from "react-router-dom";

function AllProjects() {
  const projects = useLoaderData();

  return (
    <div className="nav_bar">
      <div>Contact</div>
      <div className="list">
        {projects.map((project) => (
          <div className="authors">
            <div>{project.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
