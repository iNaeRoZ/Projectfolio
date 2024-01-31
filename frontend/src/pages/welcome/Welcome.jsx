import React from "react";
import { Link } from "react-router-dom";
import videoBg from "../../assets/videoBg.mp4";

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="overlay" />
      <video src={videoBg} autoPlay loop muted />
      <Link to="/home" className="welcome-text">
        <p className="welcome-text">CLick here</p>
      </Link>
    </div>
  );
}

export default Welcome;
