import React from "react";

import videoBg from "../../assets/videoBg.mp4";

import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="overlay" />
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
}

export default Welcome;
