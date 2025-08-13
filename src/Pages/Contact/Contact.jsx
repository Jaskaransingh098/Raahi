import React from "react";
import Banner from "../../components/Banner/Banner";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import "./Contact.css";

function Contact() {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAQ0au8Tm0jRGnPzlk3g2BqviC9cMHcvAU&q=RAAHi+Outdoors,Flat+No.+101,+1st+Floor,+Bauhinia,+Damle+Path,+Law+College+Rd,+Pune,+Maharashtra+411038`;
  return (
    <>
      <Banner title="Contact" breadcrumb="Contact" />

      <section className="contact-us-section">
        <div className="contact-us-grid">
          {/* Left Column */}
          <div className="contact-us-left-col">
            <p className="contact-us-subtitle">Contact Us</p>
            <h2 className="contact-us-title">
              Adventure Begins Here Contact Us
            </h2>
            <div className="contact-us-card">
              <div className="contact-us-icon-wrapper">
                <MapPin />
              </div>
              <h4>Location</h4>
              <p>Ready to vist out main office?</p>
              <strong>55 Clark St, Brooklyn, USA</strong>
            </div>
          </div>

          {/* Center Column */}
          <div className="contact-us-center-col">
            <div className="contact-us-image-oval">
              <img
                src="https://html.pixelfit.agency/tripex/assets/images/innerpage/contact/contact-img1.jpg"
                alt="Airplane flying over an island"
                className="contact-us-main-image"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-us-right-col">
            <div className="contact-us-card">
              <div className="contact-us-icon-wrapper">
                <Mail />
              </div>
              <h4>Email Us 24/7</h4>
              <p>Have any question? Send a message</p>
              <strong>support@gmail.com</strong>
            </div>
            <div className="contact-us-card">
              <div className="contact-us-icon-wrapper">
                <Phone />
              </div>
              <h4>Online Booking</h4>
              <p>Need online tour reservations</p>
              <strong>+1 (234) 456 8888</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="location-map-section">
        <div className="location-map-container">
          {/* <div className="location-map-info-box">
            <h3>RAAHi Outdoors</h3>
            <p>
              Flat No. 101, 1st Floor, Bauhinia, Damle Path, Law College Rd,
              Pune, Maharashtra 411038
            </p>
            <div className="location-map-rating">
              <span>4.8</span>
              <div className="location-map-stars">
                <Star className="location-map-star-icon filled" />
                <Star className="location-map-star-icon filled" />
                <Star className="location-map-star-icon filled" />
                <Star className="location-map-star-icon filled" />
                <Star className="location-map-star-icon filled" />
              </div>
              <span>277 reviews</span>
            </div>
            <a href="#" className="location-map-directions-link">
              View larger map
            </a>
          </div> */}

          <iframe
            className="location-map-iframe"
            src={mapSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location of RAAHi Outdoors"
          ></iframe>
        </div>
      </section>

      <section className="message-form-section">
        <div className="message-form-container">
          <div className="message-form-header">
            <p className="message-form-subtitle">Send Us Message</p>
            <h2 className="message-form-title">
              Send Us a Message — Your Journey Starts Here
            </h2>
          </div>
          <form className="message-form">
            <div className="message-form-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="message-form-row">
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="message-form-row">
              <textarea placeholder="Message" rows="6" required></textarea>
            </div>
            <div className="message-form-footer">
              <button type="submit" className="message-form-button">
                Send Comments
                <span className="message-form-button-icon">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
