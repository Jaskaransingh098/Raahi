import React from "react";
import "./Terms.css";
import Banner from "../../components/Banner/Banner";
import {
  FileText,
  Wallet,
  CalendarX,
  FileBadge,
  HeartPulse,
  Users,
  Gavel,
} from "lucide-react";

function Terms() {
  const [activeSection, setActiveSection] = React.useState("booking");
  const contentRef = React.useRef(null);

  // Smooth scroll handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Observer to update active link on scroll
  React.useEffect(() => {
    const sections = contentRef.current.querySelectorAll(
      ".terms-conditions-section"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of the viewport
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <Banner title="Terms & Conditions" breadcrumb="Terms & Conditions" />
      <div className="terms-conditions-header">
        <h1>Terms and Conditions</h1>
        <h3>Last Updated: 28/March/2025</h3>
        <p>
          Welcome to{" "}
          <span className="terms-header-p">TEAM Eco Explorers</span>. By
          using our travel and tourism services, you agree to comply with the
          following terms and conditions. Please read them carefully before
          booking with us.
        </p>
      </div>
      <section className="terms-condition-main-section">
        <div className="terms-conditions-container">
          <aside className="terms-conditions-sidebar">
            <ul>
              <li>
                <a
                  href="#booking"
                  className={activeSection === "booking" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "booking")}
                >
                  <Wallet size={20} className="terms-conditions-nav-icon" />{" "}
                  Booking & Payments
                </a>
              </li>
              <li>
                <a
                  href="#cancellation"
                  className={activeSection === "cancellation" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "cancellation")}
                >
                  <CalendarX size={20} className="terms-conditions-nav-icon" />{" "}
                  Cancellation & Refunds
                </a>
              </li>
              <li>
                <a
                  href="#documents"
                  className={activeSection === "documents" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "documents")}
                >
                  <FileBadge size={20} className="terms-conditions-nav-icon" />{" "}
                  Travel Documents
                </a>
              </li>
              <li>
                <a
                  href="#liability"
                  className={activeSection === "liability" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "liability")}
                >
                  <HeartPulse size={20} className="terms-conditions-nav-icon" />{" "}
                  Liability & Responsibility
                </a>
              </li>
              <li>
                <a
                  href="#conduct"
                  className={activeSection === "conduct" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "conduct")}
                >
                  <Users size={20} className="terms-conditions-nav-icon" />{" "}
                  Conduct & Behavior
                </a>
              </li>
              <li>
                <a
                  href="#governing-law"
                  className={activeSection === "governing-law" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "governing-law")}
                >
                  <Gavel size={20} className="terms-conditions-nav-icon" />{" "}
                  Governing Law
                </a>
              </li>
            </ul>
          </aside>
          <main className="terms-conditions-content" ref={contentRef}>
            <section id="booking" className="terms-conditions-section">
              <h2>
                <Wallet className="terms-conditions-icon" /> Booking and
                Payments
              </h2>
              <ul>
                <li>
                  All bookings must be made through our official website,
                  authorized agents, or customer service.
                </li>
                <li>
                  A non-refundable deposit is required to confirm a booking.
                </li>
                <li>
                  Full payment must be made before the departure date. Failure
                  to pay may result in cancellation.
                </li>
                <li>
                  Prices are subject to change based on availability, taxes, and
                  government regulations.
                </li>
              </ul>
            </section>
            <section id="cancellation" className="terms-conditions-section">
              <h2>
                <CalendarX className="terms-conditions-icon" /> Cancellation and
                Refund Policy
              </h2>
              <ul>
                <li>
                  Cancellations made in advance may be eligible for a partial
                  refund.
                </li>
                <li>
                  No refunds will be issued for last-minute cancellations.
                </li>
                <li>
                  Refunds (if applicable) will be processed within a reasonable
                  timeframe, subject to bank policies.
                </li>
                <li>
                  In case of cancellation due to unforeseen circumstances
                  (natural disasters, pandemics, etc.), rescheduling options may
                  be provided at the company’s discretion.
                </li>
              </ul>
            </section>
            <section id="documents" className="terms-conditions-section">
              <h2>
                <FileBadge className="terms-conditions-icon" /> Travel Documents
                and Requirements
              </h2>
              <ul>
                <li>
                  Customers are responsible for ensuring they have valid
                  passports, visas, and any required travel permits.
                </li>
                <li>
                  The company is not responsible for denied entry due to
                  incomplete documentation.
                </li>
                <li>
                  Health and vaccination requirements must be met as per the
                  destination country’s regulations.
                </li>
              </ul>
            </section>
            <section id="liability" className="terms-conditions-section">
              <h2>
                <HeartPulse className="terms-conditions-icon" /> Liability and
                Responsibility
              </h2>
              <ul>
                <li>
                  Eco Explorers Outdoors acts as an agent for hotels and
                  transport providers and is not liable for delays,
                  cancellations, or service failures from third parties.
                </li>
                <li>
                  The company is not responsible for any personal injury, loss,
                  or damage during the trip. Travelers are advised to purchase
                  travel insurance.
                </li>
                <li>
                  Itineraries are subject to change due to weather, operational
                  issues, or government restrictions.
                </li>
              </ul>
            </section>
            <section id="conduct" className="terms-conditions-section">
              <h2>
                <Users className="terms-conditions-icon" /> Conduct and Behavior
              </h2>
              <ul>
                <li>
                  Travelers are expected to behave respectfully towards fellow
                  travelers, guides, and local communities.
                </li>
                <li>
                  Any misconduct that disrupts the tour may result in removal
                  from the trip without a refund.
                </li>
              </ul>
            </section>
            <section id="governing-law" className="terms-conditions-section">
              <h2>
                <Gavel className="terms-conditions-icon" /> Governing Law &
                Agreement
              </h2>
              <p>
                These terms are governed by the laws of Maharashtra/India. Any
                disputes shall be settled in the jurisdiction of Pune
                (Maharashtra). By booking with TEAM Eco Explorers, you
                acknowledge that you have read, understood, and agreed to these
                terms.
              </p>
              <p>
                <strong>For further inquiries, please contact us at:</strong>
                <br />
                Email: Eco Explorers@gmail.com
                <br />
                Phone: +91 9370704070
              </p>
            </section>
          </main>
        </div>
      </section>
    </>
  );
}

export default Terms;
