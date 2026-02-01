import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    tours: false,
    pages: false,
  });

  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdownOpen((prev) => {
      // If the clicked dropdown is already open, close it
      if (prev[menu]) {
        return { tours: false, pages: false };
      }

      // Otherwise close all others and open the clicked one
      return {
        tours: false,
        pages: false,
        [menu]: true,
      };
    });
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".hamburger-menu")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Desktop Navbar */}
      <header className={`site-header ${isHome ? "home-page" : "other-page"}`}>
        <div className="navbar-section">
          <nav className={`navbar ${isHome ? "home-navbar" : "other-navbar"}`}>
            <div className="navbar-container">
              <div className="logo">
                <img
                  src="/logo/logo-1.png"
                  alt="logo"
                  className="logo-icon"
                />
                {/* <span className={`logo-text ${isHome ? "" : "other-text"}`}>
                  Wonderland
                  <br />
                  <span
                    className={`logo-text1 ${isHome ? "" : "other-text1"}`}
                  >Himalayas</span>
                </span> */}
              </div>
              <ul className={`nav-menu ${isHome ? "" : "other-text"}`}>
                <li>
                   <Link to="/" className={`nav-link ${isHome ? "" : "other-text"}`}>
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link to="#" className={`nav-link ${isHome ? "" : "other-text"}`}>
                    Adventures <ChevronDown size={16} className="arrow-svg" />
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/tours">All Adventures</Link>
                    {/* <Link to="/tours?type=SAHYADRI TREKS">Sahyadri Treks</Link> */}
                    <Link to="/tours?type=HIMALAYAN TREKS">
                      Himalayan Treks
                    </Link>
                    <Link to="/tours?type=BIKERS SPECIAL">Bikers Special</Link>
                  </div>
                </li>

                <li>
                  <Link to="/ourgallery" className={`nav-link ${isHome ? "" : "other-text"}`}>
                    Our Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className={`nav-link ${isHome ? "" : "other-text"}`}>
                    About us
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link to="#" className={`nav-link ${isHome ? "" : "other-text"}`}>
                    Pages <ChevronDown size={16} className="arrow-svg" />
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/whyus">Why travel with us</Link>
                    <Link to="/faq">FAQs</Link>
                    <Link to="/rules">Rules and Regulations</Link>
                    <Link to="/cancel">Cancellation policy</Link>
                    <Link to="/privacy">Privacy policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                  </div>
                </li>

                <li>
                  <Link to="/contact" className={`nav-link ${isHome ? "" : "other-text"}`}>
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="navbar-right">
                <Link to="/customise" className="destination-btn-link">
                  <button className="destination-btn">
                    <span>Customize Tour</span>
                    <span className="destination-icon-wrapper">
                      <ArrowRight className="destination-arrow-svg" size={20} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`mobile-nav-menu ${isMobileMenuOpen ? "open" : ""}`}
      >
        <div className="mobile-menu-header">
          <div className="logo">
            <img
              src="/logo/logo-1.png"
              alt="logo"
              className="logo-icon"
            />
            <span className="logo-text"></span>
          </div>
          {/* <button className="close-menu-btn" onClick={toggleMobileMenu}>
            <X size={26} />
          </button> */}
        </div>

        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>

          {/* Mobile dropdown: Treks */}
          <li>
            <button
              className="mobile-dropdown-toggle"
              onClick={() => toggleMobileDropdown("tours")}
            >
              Adventures
              {mobileDropdownOpen.tours ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            {mobileDropdownOpen.tours && (
              <ul className="mobile-submenu">
                <li>
                  <Link
                    to="/tours"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    All adventures
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/tours?type=SAHYADRI TREKS"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Sahyadri Treks
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/tours?type=HIMALAYAN TREKS"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Himalayan Treks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tours?type=BIKERS SPECIAL"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Bikers Special
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/ourgallery" onClick={toggleMobileMenu}>
              Our Gallery
            </Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={toggleMobileMenu}>
              About us
            </Link>
          </li>

          {/* Mobile dropdown: Pages */}
          <li>
            <button
              className="mobile-dropdown-toggle"
              onClick={() => toggleMobileDropdown("pages")}
            >
              Pages
              {mobileDropdownOpen.pages ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            {mobileDropdownOpen.pages && (
              <ul className="mobile-submenu">
                <li>
                  <Link
                    to="/whyus"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Why travel with us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rules"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Rules and Regulations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cancel"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Cancellation policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    onClick={toggleMobileMenu}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Customize Tour button */}
        <Link
          to="/customise"
          onClick={toggleMobileMenu}
          style={{ textDecoration: "none" }}
        >
          <button className="mobile-destination-btn">
            <span style={{ color: "#fff" }}>Customize Tour</span>
            <span className="mobile-destination-icon-wrapper">
              <ArrowRight className="destination-arrow-svg" size={20} />
            </span>
          </button>
        </Link>

        {/* Social Links */}
        {/* <div className="follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons-navbar">
            <a href="#">
              <Facebook size={20} />
            </a>
            <a href="#">
              <Twitter size={20} />
            </a>
            <a href="#">
              <Linkedin size={20} />
            </a>
            <a href="#">
              <Youtube size={20} />
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
