import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    tours: false,
    destinations: false,
    pages: false,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      <header className="site-header">
        <div className="logo-container">
          <div className="logo">
            <img
              src="/home-pics/business-trip.png"
              alt=""
              className="logo-icon"
            />
            <span>Raahi</span>
          </div>
        </div>
        <nav className="navbar">
          <div className="navbar-container">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link">
                  Tours{" "}
                  <svg
                    className="arrow-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                  </svg>
                </Link>
                <div className="dropdown-content">
                  <Link to="/tourlist">Tour list</Link>
                  <Link href="#">Destinations 02</Link>
                  <Link href="#">Destinations Details</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link">
                  Destinations{" "}
                  <svg
                    className="arrow-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                  </svg>
                </Link>
                <div className="dropdown-content">
                  <Link to="#">Destinations 01</Link>
                  <Link to="#">Destinations 02</Link>
                  <Link to="#">Destinations Details</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link">
                  Pages{" "}
                  <svg
                    className="arrow-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                  </svg>
                </Link>
                <div className="dropdown-content">
                  <Link to="/aboutus">About Us</Link>
                  <Link to="/ourgallery">Our Gallery</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Blogs{" "}
                  <svg
                    className="arrow-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="navbar-right">
              <button className="destination-btn">
                <Link to="/customise" className="destination-btn-link">Customize Tour</Link>
                <span className="destination-icon-wrapper">
                  <svg
                    className="destination-arrow-svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7l7 7-7 7"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </nav>
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}

      <div className={`mobile-nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <div className="logo">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0L32 9.33333V22.6667L16 32L0 22.6667V9.33333L16 0Z"
                fill="#4CAF50"
              />
              <path
                d="M16 12L24 16.6667V21.3333L16 26L8 21.3333V16.6667L16 12Z"
                fill="white"
              />
              <path
                d="M11.3333 15.3333L16 18L20.6667 15.3333L16 12.6667L11.3333 15.3333Z"
                fill="#A5D6A7"
              />
            </svg>
            <span>Raahi</span>
          </div>
          <button className="close-menu-btn" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li>
            <a href="/">
              Home{" "}
              <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
              </svg>
            </a>
          </li>

          <li>
            <button
              className="mobile-dropdown-toggle"
              onClick={() => toggleMobileDropdown("tours")}
            >
              Tours
              <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
              </svg>
            </button>
            {mobileDropdownOpen.tours && (
              <ul className="mobile-submenu">
                <li>
                  <a href="#">Destinations 01</a>
                </li>
                <li>
                  <a href="#">Destinations 02</a>
                </li>
                <li>
                  <a href="#">Destinations Details</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="mobile-dropdown-toggle"
              onClick={() => toggleMobileDropdown("destinations")}
            >
              Destinations
              <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
              </svg>
            </button>
            {mobileDropdownOpen.destinations && (
              <ul className="mobile-submenu">
                <li>
                  <a href="#">Destinations 01</a>
                </li>
                <li>
                  <a href="#">Destinations 02</a>
                </li>
                <li>
                  <a href="#">Destinations Details</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="mobile-dropdown-toggle"
              onClick={() => toggleMobileDropdown("pages")}
            >
              Pages
              <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
              </svg>
            </button>
            {mobileDropdownOpen.pages && (
              <ul className="mobile-submenu">
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="mobile-destination-btn">
          Destination
          <span className="mobile-destination-icon-wrapper">
            <svg
              className="destination-arrow-svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7-7l7 7-7 7"
              ></path>
            </svg>
          </span>
        </button>
        <div className="follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f">f</i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">t</i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in">in</i>
            </a>
            <a href="#">
              <i className="fab fa-youtube">y</i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
