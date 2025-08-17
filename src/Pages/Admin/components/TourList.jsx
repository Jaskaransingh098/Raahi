import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/tourList.css";

const TourList = ({ isAdmin = false, onEdit, onDelete }) => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/tours")
      .then((res) => setTours(res.data))
      .catch((err) => console.error("Error fetching tours:", err));
  }, []);

  const handleBookNowClick = (tourId) => {
    navigate(`/book/${tourId}`);
  };

  return (
    <div className="tour-list-wrapper">
      {!isAdmin && (
        <>
          <div className="tour-list-hero-section-discover">
            <h1 className="tour-list-hero-title">Discover Amazing Tours</h1>
            <p className="tour-list-hero-subtitle">
              Explore breathtaking destinations with our carefully curated tour
              packages designed for unforgettable experiences.
            </p>
          </div>

          <div className="tour-list-hero-section-video">
            <video
              src="/list-video.mp4"
              className="tour-list-hero-video"
              autoPlay
              loop
              muted
              poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      )}

      <div className="tour-list-search-results-section">
        {!isAdmin && <h2 className="tour-list-section-title">Our Tours</h2>}
        <div className="tour-list-container">
          {Array.isArray(tours) && tours.length > 0 ? (
            tours.map((tour) => (
              <div className="tour-list-card" key={tour._id}>
                {/* Image Section */}
                <div className="tour-list-card-image-wrapper">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="tour-list-card-image"
                  />
                  <div className="tour-list-card-duration-badge">
                    {tour.duration}
                  </div>
                </div>

                {/* Details */}
                <div className="tour-list-details">

                  {/* Title */}
                  <h3 className="tour-list-card-title">{tour.title}</h3>

                  {/* Location */}
                  <p className="tour-list-card-location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {tour.location}
                  </p>

                  {/* Description */}
                  <p className="tour-list-card-description">
                    {tour.description}
                  </p>

                  {/* Footer Grid */}
                  <div className="tour-list-card-footer-grid">
                    <div className="tour-list-footer-item">
                      <span className="footer-label">💲 Price</span>
                      <span className="footer-value">₹{tour.price}</span>
                    </div>
                    <div className="tour-list-footer-item">
                      <span className="footer-label">📍 Place</span>
                      <span className="footer-value">
                        {tour.places || "N/A"}
                      </span>
                    </div>
                    <div className="tour-list-footer-item">
                      <span className="footer-label">👥 Guest</span>
                      <span className="footer-value">
                        {tour.guests || "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  {isAdmin ? (
                    <div className="tour-list-admin-buttons">
                      <button
                        className="tour-list-edit-btn"
                        onClick={() => onEdit(tour)}
                      >
                        Edit
                      </button>
                      <button
                        className="tour-list-delete-btn"
                        onClick={() => onDelete(tour._id)}
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <button
                      className="tour-list-book-btn"
                      onClick={() => handleBookNowClick(tour._id)}
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No tours found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourList;
