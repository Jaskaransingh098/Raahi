import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/trekList.css";

const TrekList = ({ isAdmin = false, onEdit, onDelete }) => {
  const [treks, setTreks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/treks")
      .then((res) => setTreks(res.data))
      .catch((err) => console.error("Error fetching treks:", err));
  }, []);

  const handleBookNowClick = (trekId) => {
    navigate(`/book/${trekId}`);
  };

  return (
    <div className="tour-list-wrapper">
      {!isAdmin && (
        <>
          {/* Hero Section 1: Discover Amazing Treks */}
          <div className="tour-list-hero-section-discover">
            <h1 className="tour-list-hero-title">
              Discover Breathtaking Treks
            </h1>
            <p className="tour-list-hero-subtitle">
              Embark on thrilling adventures with our expertly crafted trekking
              packages.
            </p>
          </div>

          {/* Hero Section 2: Video Banner */}
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

      <div className="trek-list-content">
        {!isAdmin && <h2 className="trek-list-section-title">Our Treks</h2>}

        <div className="trek-list-grid">
          {Array.isArray(treks) && treks.length > 0 ? (
            treks.map((trek) => (
              <div className="trek-card" key={trek._id}>
                <div className="trek-image-wrapper">
                  <img
                    src={
                      trek.image ||
                      "https://placehold.co/600x400?text=Trek+Image"
                    }
                    alt={trek.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
                    }}
                  />
                  <div className="trek-duration">{trek.duration}</div>
                  <div className="trek-difficulty">{trek.difficulty}</div>
                </div>
                <div className="trek-details">
                  <h3>{trek.name}</h3>
                  <p className="trek-region">Region: {trek.region}</p>
                  <p className="trek-description">{trek.description}</p>
                  <div className="trek-footer">
                    <span className="trek-price">₹{trek.price}</span>
                    {isAdmin ? (
                      <div className="trek-admin-buttons">
                        <button onClick={() => onEdit(trek)}>Edit</button>
                        <button onClick={() => onDelete(trek._id)}>
                          Delete
                        </button>
                      </div>
                    ) : (
                      <button
                        className="trek-book-btn"
                        onClick={() => handleBookNowClick(trek._id)}
                      >
                        Book Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No treks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrekList;
