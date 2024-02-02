import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav_bar">
      <Link to="/home" className="welcome-text">
        <p className="welcome-text">Home</p>
      </Link>
      <Link to="/projects" className="welcome-text">
        <p className="welcome-text">Projects</p>
      </Link>
      <Link to="/home" className="welcome-text">
        <p className="welcome-text">About Me</p>
      </Link>
      <Link to="/home" className="welcome-text">
        <p className="welcome-text">Contact Me</p>
      </Link>
      <Link to="/home" className="welcome-text">
        <p className="welcome-text">Admin</p>
      </Link>
    </div>
  );
}

export default NavBar;
