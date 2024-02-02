import React from "react";
import { useLoaderData } from "react-router-dom";

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
            id={project.id}
          />
        </div>
      ))}
    </div>
  );
}

export default AllProjects;
