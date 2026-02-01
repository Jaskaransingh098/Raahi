import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import axios from "axios";
import api from "../../api";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const googleApi = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${googleApi}&q=,Flat+No.+101,+1st+Floor,+Bauhinia,+Damle+Path,+Law+College+Rd,+Pune,+Maharashtra+411038`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    const toastId = toast.loading("Sending message...");

    try {
      await api.post("/api/mail/contact", formData);
      toast.success("Message sent successfully!", { id: toastId });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.", { id: toastId });
    } finally {
      setSubmitting(false);
    }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Banner title="Contact" breadcrumb="Contact" />

      <section className="contact-us-section">
        <div className="contact-us-container">
          {/* Left Side */}
          <motion.div
            className="contact-us-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="contact-us-subtitle">Contact Us</p>
            <h2 className="contact-us-title">Adventure Begins Here</h2>

            <div className="contact-us-card">
              <div className="contact-us-icon-wrapper">
                <MapPin />
              </div>
              <div>
                <h4>Location</h4>
                <p>Ready to visit our main office?</p>
                <strong>
                  Flat No. 101, 1st Floor, Bauhinia, Damle Path, Law College Rd,
                  Pune, Maharashtra 411004
                </strong>
              </div>
            </div>

            <div className="contact-us-card">
              <div className="contact-us-icon-wrapper">
                <Mail />
              </div>
              <div>
                <h4>Email Us 24/7</h4>
                <p>Have any question? Send a message</p>
                <strong>Wonderlandhimalayas@Gmail.com</strong>
              </div>
            </div>

            <div className="contact-us-card">
              <div className="contact-us-icon-wrapper">
                <Phone />
              </div>
              <div>
                <h4>Online Booking</h4>
                <p>Need online reservations?</p>
                <strong>+91 93707 04070</strong>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="contact-us-right"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-us-image-wrapper">
              <img
                src="/admin/Adventure.png"
                alt="Adventure Illustration"
                className="contact-us-main-image"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="location-map-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="location-map-container">
          <iframe
            className="location-map-iframe"
            src={mapSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location of Wonderlandhimalayas Outdoors"
          ></iframe>
        </div>
      </motion.section>

      <motion.section
        className="message-form-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="message-form-container">
          <div className="message-form-header">
            <p className="message-form-subtitle">Send Us Message</p>
            <h2 className="message-form-title">
              Send Us a Message — Your Journey Starts Here
            </h2>
          </div>
          <form className="message-form" onSubmit={handleSubmit}>
            <div className="message-form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="message-form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="message-form-row">
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="message-form-footer">
              <button
                type="submit"
                className="message-form-button"
                disabled={submitting}
              >
                {submitting ? (
                  <span className="loading-spinner" aria-hidden="true"></span>
                ) : (
                  <>
                    Send Comments
                    <span className="message-form-button-icon">
                      <ArrowRight size={18} />
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </>
  );
}

export default Contact;
