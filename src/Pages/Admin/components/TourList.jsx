import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import api from "../../../api";
import Banner from "../../../components/Banner/Banner";
import "../styles/tourList.css";

const TourList = ({ isAdmin = false, onEdit, onDelete, searchInputs }) => {
  const [tours, setTours] = useState([]);
  const [totalTours, setTotalTours] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const searchParams = new URLSearchParams(location.search);
  const activity = searchParams.get("activity");
  const duration = searchParams.get("duration");
  const price = searchParams.get("price");

  const handleBookNowClick = (tourId) => {
    navigate(`/book/${tourId}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const activity = params.get("activity");
    const duration = params.get("duration");
    const priceRange = params.get("price");
    const type = params.get("type");

    api
      .get("/api/tours")
      .then((res) => {
        setTotalTours(res.data.length);

        let filteredTours = res.data;

        if (type && type !== "All") {
          filteredTours = filteredTours.filter(
            (tour) => tour.type?.toLowerCase() === type.toLowerCase()
          );
        } else {
          filteredTours = filteredTours.filter((tour) => {
            let activityMatch = true;
            let durationMatch = false;
            let priceMatch = false;

            // Activity check
            if (activity && activity !== "All") {
              activityMatch =
                tour.category.toLowerCase() === activity.toLowerCase();
            }

            // Duration check (make it range-based instead of strict equality)
            if (duration && duration !== "All") {
              const dur = tour.duration.toLowerCase();

              if (duration === "1 - 3 Days") {
                durationMatch = /1|2|3/.test(dur);
              } else if (duration === "4 - 7 Days") {
                durationMatch = /4|5|6|7/.test(dur);
              } else if (duration === "8+ Days") {
                durationMatch = /8|9|10|\+/.test(dur);
              }
            }

            // Price check (fix dropdown mismatch: remove spaces)
            if (priceRange && priceRange !== "All") {
              const price = Number(tour.price);

              if (priceRange === "Below 5000") priceMatch = price < 5000;
              if (
                priceRange === "10000-20000" ||
                priceRange === "10000 - 20000"
              ) {
                priceMatch = price >= 10000 && price <= 20000;
              }
              if (priceRange === "Above 20000") priceMatch = price > 20000;
            }

            if (!activityMatch) return false;

            if (
              (!duration || duration === "All") &&
              (!priceRange || priceRange === "All")
            ) {
              return true;
            }

            return durationMatch || priceMatch;
          });
        }

        setTours(filteredTours);
      })
      .catch((err) => console.error("Error fetching tours:", err));
  }, [location.search]);

  const [sortOption, setSortOption] = useState("default");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sortedTours = [...tours].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "durationShort") return a.duration - b.duration;
    if (sortOption === "durationLong") return b.duration - a.duration;
    return 0;
  });

  const options = [
    { value: "default", label: "Sort By " },
    { value: "priceLowHigh", label: "Price: Low to High" },
    { value: "priceHighLow", label: "Price: High to Low" },
    { value: "durationShort", label: "Duration: Shortest" },
    { value: "durationLong", label: "Duration: Longest" },
  ];

  const indexOfLastTour = currentPage * itemsPerPage;
  const indexOfFirstTour = indexOfLastTour - itemsPerPage;
  const currentTours = sortedTours.slice(indexOfFirstTour, indexOfLastTour);
  const totalPages = Math.ceil(sortedTours.length / itemsPerPage);

  return (
    <div className="tour-list-wrapper">
      {!isAdmin && (
        <div>
          <Banner title="Treks" breadcrumb="Treks" />
          <div className="tour-list-navbar">
            <span className="tour-list-count">
              <span className="tour-list-count-number">
                {sortedTours.length}
              </span>{" "}
              Trips found of{" "}
              <span className="tour-list-count-number-2">{totalTours}</span>
            </span>

            {/* Show user inputs */}
            <div className="tour-list-search-summary">
              {/* <span className="list-search-title">Your Search:</span> */}
              {/* Conditionally render each filter if it exists */}
              {activity && activity !== "All" && (
                <span className="summary-item">
                  <strong>Activity:</strong> {activity}
                </span>
              )}
              {duration && duration !== "All" && (
                <span className="summary-item">
                  <strong>Duration:</strong> {duration}
                </span>
              )}
              {price && price !== "All" && (
                <span className="summary-item">
                  <strong>Price:</strong> {price}
                </span>
              )}
            </div>

            {/* Sorting */}
            <div
              className="smooth-dropdown"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="smooth-dropdown-header">
                {options.find((o) => o.value === sortOption)?.label}
                <FaChevronDown
                  className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}
                />
              </div>
              <ul
                className={`smooth-dropdown-list ${dropdownOpen ? "open" : ""}`}
              >
                {options.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => {
                      setSortOption(option.value);
                      setDropdownOpen(false);
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="tour-list-search-results-section">
        {/* {!isAdmin && <h2 className="tour-list-section-title">Our Tours</h2>} */}
        <div className="tour-list-container">
          {Array.isArray(sortedTours) && sortedTours.length > 0 ? (
            sortedTours.map((tour) => (
              <div className="tour-card" key={tour._id}>
                <div className="tour-card-image-wrapper">
                  <img
                    src={tour.image.replace(
                      "http://localhost:5000",
                      "http://ecoexplorers.in"
                    )}
                    alt={tour.title}
                    className="tour-card-image"
                  />
                  <div className="tour-card-badge-container">
                    {tour.discount > 0 && (
                      <span className="tour-card-badge discount-badge">
                        {tour.discount}% Off
                      </span>
                    )}
                  </div>
                </div>

                <div className="tour-card-details">
                  <div>
                    {" "}
                    <h3 className="tour-card-title">{tour.title}</h3>
                    <p className="tour-card-description">
                      {tour.description.length > 120
                        ? `${tour.description.substring(0, 120)}...`
                        : tour.description}
                    </p>
                    <div className="tour-card-info-items">
                      <div className="tour-card-info-item">
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
                        <span>{tour.location}</span>
                      </div>
                      <div className="tour-card-info-item">
                        <svg
                          xmlns="http://www.w.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>{tour.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="tour-card-bottom">
                    <div className="tour-card-price-section">
                      <span className="tour-card-price-from">From</span>
                      <span className="tour-card-price">₹{tour.price}</span>
                    </div>

                    {!isAdmin && (
                      <button
                        className="tour-card-book-btn"
                        onClick={() => handleBookNowClick(tour._id)}
                      >
                        Book Now <span className="arrow">→</span>
                      </button>
                    )}

                    {isAdmin && (
                      <div className="tour-card-admin-buttons">
                        <button onClick={() => onEdit(tour)}>Edit</button>
                        <button onClick={() => onDelete(tour._id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No tours found.</p>
          )}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={page === currentPage ? "active" : ""}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TourList;
