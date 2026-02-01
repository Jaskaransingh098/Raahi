import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = ({ title, breadcrumb }) => {
  return (
    //
    <div className="banner-container">
      <div className="banner-image">
        <div className="banner-content">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-active">{breadcrumb}</span>
          </div>

          {/* Title */}
          <h1 className="banner-title">{title}</h1>
          <div className="title-underline"></div>

          {/* Subtitle */}
        
        </div>
      </div>
    </div>
  );
};

export default Banner;
