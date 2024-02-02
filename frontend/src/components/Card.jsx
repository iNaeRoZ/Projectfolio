import React from "react";
import "./Card.css";

import PropTypes from "prop-types";

function Card({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="btn">
        <button type="button">
          <p>Read more</p>
        </button>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default Card;
