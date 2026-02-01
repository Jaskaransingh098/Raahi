import React, { useState } from "react";
import axios from "axios";
import Banner from "../../components/Banner/Banner";
import { ArrowRight } from "lucide-react";
import api from "../../api"
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import "./Customise.css";

function Customise() {
  const [formData, setFormData] = useState({
    guestName: "",
    whatsapp: "",
    email: "",
    country: "India",
    count: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    const toastId = toast.loading("Sending request...");

    try {
      await api.post("/api/mail/customise", formData);
      toast.success("Request sent successfully!", { id: toastId });

      setFormData({
        guestName: "",
        whatsapp: "",
        email: "",
        country: "India",
        count: "",
        date: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send request.", { id: toastId });
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
      <Banner title="Customise" breadcrumb="Customise" />

      <motion.section
        className="customize-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="customize-container">
          <motion.div
            className="customize-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="customize-subtitle">Need a Customized Tour Plan?</p>
            <h2 className="customize-title">
              SHARE YOUR TRAVEL PLANS — WE’LL CRAFT THE PERFECT TRIP FOR YOU! 🗺️
            </h2>
          </motion.div>
          <motion.form
            className="customize-form"
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <input
              className="customize-input light"
              type="text"
              name="guestName"
              placeholder="Enter the Guest Name"
              value={formData.guestName}
              onChange={handleChange}
              required
            />
            <input
              className="customize-input light"
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Contact Number"
              value={formData.whatsapp}
              onChange={handleChange}
            />
            <input
              className="customize-input light"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="customize-input light"
              type="text"
              name="country"
              value={formData.country}
              readOnly
            />
            <input
              className="customize-input light"
              type="number"
              name="count"
              placeholder="Enter Number of Travel Count"
              value={formData.count}
              onChange={handleChange}
            />
            <input
              className="customize-input light"
              type="text"
              name="date"
              placeholder="dd-mm-yyyy"
              value={formData.date}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              onChange={handleChange}
            />
            <textarea
              className="customize-textarea light"
              name="message"
              placeholder="Enter your message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="customize-footer">
              <button
                type="submit"
                className="customize-button"
                disabled={submitting}
              >
                {submitting ? (
                  <span className="loading-spinner" aria-hidden="true"></span>
                ) : (
                  <>
                    Send Message
                    <span className="customize-button-icon">
                      <ArrowRight size={18} />
                    </span>
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </motion.section>
    </>
  );
}

export default Customise;
