import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css"; // Optional for styles

const Banner = ({ title, breadcrumb }) => {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <div className="banner-overlay">
          <img src="/common-banner/text-bg.png" alt="brush" className="brush-img" />
          <div className="banner-text">
            <h1>{title}</h1>
            <p><Link to="/" className="banner-link">Home</Link> &gt; {breadcrumb}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
