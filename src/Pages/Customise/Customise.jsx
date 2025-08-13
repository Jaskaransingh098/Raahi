import React from "react";
import Banner from "../../components/Banner/Banner";
import { ArrowRight } from "lucide-react";
import "./Customise.css";

function Customise() {
  return (
    <>
      <Banner title="Customise" breadcrumb="Customise" />

      <section className="customize-section">
        <div className="customize-container">
          <div className="customize-header">
            <p className="customize-subtitle">Need a Customized Tour Plan?</p>
            <h2 className="customize-title">
              SHARE YOUR TRAVEL PLANS — WE’LL CRAFT THE PERFECT TRIP FOR YOU! 🗺️
            </h2>
          </div>
          <form className="customize-form">
            <input
              className="customize-input light"
              type="text"
              placeholder="Enter the Guest Name"
              required
            />
            <input
              className="customize-input light"
              type="tel"
              placeholder="WhatsApp Contact Number"
            />
            <input
              className="customize-input light"
              type="email"
              placeholder="Email Address"
              required
            />
            <input
              className="customize-input light"
              type="text"
              value="India"
              readOnly
            />
            <input
              className="customize-input light"
              type="number"
              placeholder="Enter Number of Travel Count"
            />
            <input
              className="customize-input light"
              type="text"
              placeholder="dd-mm-yyyy"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            <textarea
              className="customize-textarea light"
              placeholder="Enter your message"
              rows="7"
            ></textarea>
            <div className="customize-footer">
              <button type="submit" className="customize-button">
                Send Message
                <span className="customize-button-icon">
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

export default Customise;
