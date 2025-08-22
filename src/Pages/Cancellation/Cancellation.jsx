import React from "react";
import Banner from "../../components/Banner/Banner";
import "./Cancellation.css";
import { CalendarX, Wallet } from "lucide-react";

function Cancellation() {
  return (
    <>
      <div className="cancellation-page">
        <Banner
          title="Cancellation"
          breadcrumb="Cancellation & Payment policy"
        />
        <section className="cancellation-hero">
          <div className="cancellation-hero-content">
             <span className="cancellation-hero-subtitle">Read Carefully</span>
            <h1>Policy Information</h1>
            <p>
              Understanding our policies for a smooth and transparent booking
              experience.
            </p>
          </div>
        </section>

        <section className="cancellation-policy-section">
          <div className="cancellation-section-header">
            <h2>
              <CalendarX className="cancellation-icon" /> Cancellation Policy
            </h2>
          </div>
          <div className="cancellation-timeline">
            <div className="cancellation-timeline-item left">
              <div className="cancellation-timeline-content">
                <h3>45 – 30 Days Prior</h3>
                <p>25% of tour cost is charged.</p>
              </div>
            </div>
            <div className="cancellation-timeline-item right">
              <div className="cancellation-timeline-content">
                <h3>30 – 15 Days Prior</h3>
                <p>50% of tour cost is charged.</p>
              </div>
            </div>
            <div className="cancellation-timeline-item left">
              <div className="cancellation-timeline-content">
                <h3>15 – 05 Days Prior</h3>
                <p>75% of tour cost is charged.</p>
              </div>
            </div>
            <div className="cancellation-timeline-item right">
              <div className="cancellation-timeline-content">
                <h3>Less Than 5 Days / No-Show</h3>
                <p>100% of tour cost is charged.</p>
              </div>
            </div>
          </div>
          <p className="cancellation-lockdown-note">
            <strong>Minimum Charge:</strong> 10% or INR 3000 (whichever is
            maximum) applies to all cancellations.
            <br />
            <strong>Lockdown Exception:</strong> If a tour is cancelled due to
            lockdown, the paid amount will be carried forward for future use.
          </p>

          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#e5e7eb",
              margin: "80px 0",
            }}
          />

          <div className="cancellation-section-header">
            <h2>
              <Wallet className="cancellation-icon" /> Payment Policy
            </h2>
          </div>
          <div className="cancellation-payment-steps">
            <div className="cancellation-step">
              <div className="cancellation-step-number">1</div>
              <h4>At Booking</h4>
              <p>30% of total cost</p>
            </div>
            <div className="cancellation-step">
              <div className="cancellation-step-number">2</div>
              <h4>30 Days Prior</h4>
              <p>40% of total cost</p>
            </div>
            <div className="cancellation-step">
              <div className="cancellation-step-number">3</div>
              <h4>29-15 Days Prior</h4>
              <p>20% of total cost</p>
            </div>
            <div className="cancellation-step">
              <div className="cancellation-step-number">4</div>
              <h4>15 Days Prior</h4>
              <p>Final 10% of cost</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cancellation;
