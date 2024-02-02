import React from "react";
import { useLoaderData, Link } from "react-router-dom";

import "./AllProjects.css";
import Card from "../../components/Card";

function AllProjects() {
  const projects = useLoaderData();

  return (
    <div className="list">
      {projects.map((project) => (
        <div className="container">
          <Card
            title={project.name}
            imageUrl={project.image}
            body={project.description}
          />
          <Link to={`/projects/${project.id}`}>o</Link>
        </div>
      ))}
    </div>
  );
}

export default AllProjects;
