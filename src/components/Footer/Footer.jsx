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
      <section className="exclusive-offer-section">
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
              Booking Tours
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
                src="https://html.pixelfit.agency/tripex/assets/images/home-one/cta/cta-img1.png"
                alt="Traveler holding a ticket and giving a thumbs up"
                className="exclusive-offer-traveler-img"
              />
            </div>
          </div>
        </div>
      </section>

      <footer
        className="footer"
        aria-labelledby="site-footer-heading"
        ref={footerRef}
      >
        <h2 id="site-footer-heading" className="sr-only">
          Site footer
        </h2>

        <div className="footer__container">
          <article className="footer__brand" aria-label="About Tripex">
            <div className="brand__logo" aria-hidden="true">
              <div className="brand__logo-mark">
                <BaggageClaim className="brand__icon brand__icon--bag" />
                <Plane className="brand__icon brand__icon--plane" />
              </div>
              <span className="brand__name">Raahi</span>
            </div>
            <p className="brand__tagline">
              We take care of every detail you can travel with confidence ease.
            </p>
            <div className="brand__help">
              <Headphones aria-hidden="true" className="help__icon" />
              <span className="help__label">Need help? Call us</span>
            </div>
            <a
              className="brand__phone"
              href="tel:123458698888"
              aria-label="Call Tripex support"
            >
              1(234)-5869-8888
            </a>
          </article>

          <nav className="footer__links" aria-label="Footer navigation">
            <div className="footer__col">
              <h3 className="footer__heading">Quick Links</h3>
              <ul className="footer__list">
                <li>
                  <a href="#" className="footer__link">
                    Tour Listings
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Tour Activities
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Tour Types
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    How It Work
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__heading">Popular Services</h3>
              <ul className="footer__list">
                <li>
                  <a href="#" className="footer__link">
                    Flight Bookings
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Hotel Reservations
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Holiday Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Travel Insurance
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Tour Guide Services
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Visa Assistance
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__col footer__newsletter">
              <h3 className="footer__heading">Newsletter</h3>
              <p className="newsletter__hint">Get every travel news update</p>
              <form
                className="newsletter__form"
                onSubmit={onSubmit}
                aria-label="Subscribe to newsletter"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="newsletter__input"
                />
                <button type="submit" className="newsletter__button">
                  <span>Subscribe</span>
                  <span className="newsletter__button-icon" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </button>
              </form>
            </div>

            <div className="footer__col footer__social">
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
            </div>
          </nav>
        </div>

        <div className="footer__hero" aria-hidden="true">
          <div className={`hero__text ${animate ? "animate-pop" : ""}`}>
            Travel Adventure
          </div>
        </div>

        <div className="footer__bottom">
          <div className="svg-shape-wrapper footer-shaper">
            <svg className="wave" viewBox="0 0 2 1" preserveAspectRatio="none">
              <defs>
                <path
                  id="w"
                  d="M0 1V0.5 Q0.5 1 1 0.5 T2 0.5 3 0.5 4 0.5 V1 Z"
                ></path>
              </defs>
              <g>
                <use href="#w" fill="rgba(242, 151, 39, 0.08)"></use>
              </g>
            </svg>
            <svg className="wave" viewBox="0 0 2 1" preserveAspectRatio="none">
              <use href="#w" fill="rgba(242, 151, 39, 0.08)"></use>
            </svg>
          </div>
          <p className="footer__copy">
            <span className="copy__brand">©Raahi</span>, All Rights Reserved
           
          </p>

          <ul className="footer__legal">
            <li>
              <a href="#" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
