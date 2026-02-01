import React, { useEffect, useRef, useState } from "react";
import {
  BaggageClaim,
  Plane,
  Headphones,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
    />
  </svg>
);

function Footer() {
  const [animate, setAnimate] = useState(false);
  const footerRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const fadePopVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadePopTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false); // Reset when out of view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of footer is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <>
      <motion.section
        className="exclusive-offer-section"
        variants={fadePopVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={fadePopTransition}
      >
        <div className="exclusive-offer-container">
          {/* Left Column: Text Content */}
          <div className="exclusive-offer-left">
            <h2 className="exclusive-offer-title">
              Ready for Your Next adventure? Take Advantage of Our Exclusive
              Offer!
            </h2>
            <p className="exclusive-offer-description">
              Whether you're dreaming of sun-soaked beaches, charming city
              escapes, or thrilling mountain treks, we've got the perfect
              getaway for you.
            </p>
            <button className="exclusive-offer-button">
              <Link to="/contact" className="exclusive-offer-button2">
                Book Now
              </Link>
              <span className="exclusive-offer-button-icon">
                <ArrowRightIcon />
              </span>
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="exclusive-offer-right">
            <div className="exclusive-offer-image-wrapper">
              {/* <div className="exclusive-offer-bg-shape"></div> */}
              <img
                src="/footer/footer-common.png"
                alt="Traveler holding a ticket and giving a thumbs up"
                className="exclusive-offer-traveler-img"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <footer
        className="footer"
        aria-labelledby="site-footer-heading"
        ref={footerRef}
      >
        <div className="footer__container">
          <article className="footer__brand" aria-label="About Tripex">
            <div className="brand__logo" aria-hidden="true">
              <div className="brand__logo-mark">
                <img src="/logo/logo-1.png" alt="" />
              </div>
              <span className="brand__name">Eco Explorers</span>
            </div>
            <p className="brand__tagline">
              We take care of every detail so you can enjoy your adventure with
              confidence and ease.
            </p>
            <div className="brand__help">
              <Headphones aria-hidden="true" className="help__icon" />
              <span className="help__label">Need help? Call us</span>
            </div>
            <a
              className="brand__phone"
              href="tel:+919370704070"
              aria-label="Call Tripex support"
            >
              +91 93707 04070
            </a>
          </article>

          <nav className="footer__links" aria-label="Footer navigation">
            <div className="footer__col">
              <h3 className="footer__heading">Quick Links</h3>
              <ul className="footer__list">
                <li>
                  <Link to="/whyus" className="footer__link">
                    Why Travel with us
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="footer__link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/ourgallery" className="footer__link">
                    Our Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="footer__link">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="footer__link">
                    Our Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="footer__link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/admin-login" className="footer__link">
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className="footer__col footer__social">
              <h3 className="footer__heading">Follow Us</h3>
              <div
                className="social__icons"
                role="group"
                aria-label="Social media links"
              >
                <a href="#" aria-label="Facebook" className="social__btn">
                  <Facebook />
                </a>
                <a href="#" aria-label="Twitter" className="social__btn">
                  <Twitter />
                </a>
                <a href="#" aria-label="LinkedIn" className="social__btn">
                  <Linkedin />
                </a>
                <a href="#" aria-label="Instagram" className="social__btn">
                  <Instagram />
                </a>
              </div>
            </div> */}
          </nav>
        </div>

        <div className="footer__hero" aria-hidden="true">
          <div className={`hero__text ${animate ? "animate-pop" : ""}`}>
            Eco
            <br />
            Explorers
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            <span className="copy__brand">©2025 Apex InfoTech Solutions</span>,
            All Rights Reserved, Design by{" "}
            <a
              href="https://www.apexinfotechsolutions.com/"
              className="copy__brand company-link-apex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apex InfoTech Solutions
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
