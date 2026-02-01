import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import api from "../../api";
// import { Bed, Sun, Mountain, Wifi } from "lucide-react";
import {
  Star,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  Facebook,
  Twitter,
  Linkedin,
  Wifi,
  Bed,
  Car,
  Plane,
  Sun,
  Mountain,
  Send,
  Users2,
  Briefcase,
  Baby,
  ShieldX,
  AlertTriangle,
} from "lucide-react";
import { CreditCard } from "lucide-react";
import { BookOpen, HelpCircle, Info } from "lucide-react";
import "./BookNow.css";

function getFixedRating(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Range between 4.0 and 5.0
  const rating = 4 + (Math.abs(hash) % 100) / 100;
  return rating.toFixed(1);
}

// Generate a fixed number of reviews (e.g., 543 or 1.3k)
function getFixedReviews(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 3) - hash);
  }
  const reviews = 300 + (Math.abs(hash) % 2700); // 300–3000
  return reviews > 1000
    ? `${(reviews / 1000).toFixed(1)}k`
    : reviews.toString();
}

export default function BookNow() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [openFaqs, setOpenFaqs] = useState({
    integralFaqs: null,
    infoFaqs: null,
    mainFaqs: null,
    activeTab: "integralFaqs",
  });
  const [selectedBatch, setSelectedBatch] = useState(null);

  const tripInfoItems = [
    {
      icon: <Bed size={22} />,
      label: "Accommodation",
      value: "3 Star, Home Stay",
    },
    {
      icon: <Mountain size={22} />,
      label: "Trek/Tour Difficulty",
      value: "Easy",
    },
    { icon: <Users size={22} />, label: "Trip Guide", value: "Guided" },
    {
      icon: <CreditCard size={22} />,
      label: "Payment Method",
      value: "UPI, Debit Card, Credit Card, Cash, Bank Transfer",
    },
    // { icon: <Car size={22} />, label: "Transportation", value: "Bus" },
    { icon: <Sun size={22} />, label: "Activities", value: "Trekking, Hiking" },
    {
      icon: <Users2 size={22} />,
      label: "Group Size",
      value: "1-20",
    },
    {
      icon: <Briefcase size={22} />,
      label: "Trip Type",
      value: "Hiking/Backpacking Trip, Trekking",
    },
    {
      icon: <Baby size={22} />,
      label: "Age Group",
      value: "10-50",
    },
    {
      icon: <ShieldX size={22} />,
      label: "Free Cancel",
      value: "As Per Cancellation Policy",
    },
    {
      icon: <ShieldX size={22} />,
      label: "Insurance",
      value: "Not Include",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? tripInfoItems : tripInfoItems.slice(0, 4);

  useEffect(() => {
    api
      .get(`/api/tours/${id}`)
      .then((res) => setTour(res.data))
      .catch((err) => console.error("Error fetching tour:", err));
  }, [id]);

  const staticData = {
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tripInfo: {
      accommodation: "5 Star Hotel",
      tourAvailability: "Availability",
      tripGuide: "Guide",
      transportation: "Bus, Taxi, Metro",
      activities: "Relaxation",
      groupSize: "02-10 persons",
      tripType: "Wildlife Safari",
      wifi: "Available",
      freeCancel: "Yes",
      insurance: "Cover 60%",
      departureCity: "Nepal",
    },
  };
  const toggleFaq = (section, index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  if (!tour) {
    return (
      <div className="booknow-loading">
        <div className="booknow-spinner"></div>
      </div>
    );
  }

  const rating = getFixedRating(tour._id || tour.title);
  const reviews = getFixedReviews(tour._id || tour.title);

  return (
    <div className="booknow-page">
      <div className="booknow-container">
        <header className="booknow-header">
          <img
            src={
              tour.image
                ? tour.image.replace(
                    "http://localhost:5000",
                    // "https://wonderlandhimalayas.com"
                  )
                : staticData.images[0]
            }
            alt={tour.title}
            className="booknow-header-img"
          />

          {/* <img
            src={staticData.images[1]}
            alt="Landmarks"
            className="booknow-header-img"
          /> */}
        </header>
        <main className="booknow-main-content">
          <div className="booknow-left-col">
            {/* --- Tour Info --- */}
            <div className="booknow-card booknow-tour-info">
              <div className="booknow-meta-info">
                <span className="booknow-rating">
                  <Star size={16} className="star-icon" /> {rating}
                </span>
                <span>
                  <MapPin size={16} /> {tour.location}
                </span>
                <span>
                  <Clock size={16} /> {tour.duration}
                </span>
                {/* <span>
                  <Users size={16} /> 10-18 persons
                </span> */}
              </div>
              <h1>{tour.title}</h1>
            </div>

            {/* --- Contact Form --- */}
            <div className="booknow-card booknow-contact-form-card">
              <h2>Send Us a Message for {tour.title}</h2>
              <form
                className="booknow-contact-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (submitting) return;
                  setSubmitting(true);

                  const form = e.target;
                  const data = {
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value,
                    tourTitle: tour.title,
                  };

                  if (selectedBatch !== null && tour.batches[selectedBatch]) {
                    const batch = tour.batches[selectedBatch];
                    data.batchName = batch.name;
                    data.batchStartDate = batch.startDate;
                    data.batchEndDate = batch.endDate;
                  }

                  const toastId = toast.loading("Sending booking inquiry...");

                  try {
                    await api.post("/api/mail/booknow", data);
                    toast.success("✅ Booking inquiry sent successfully!", {
                      id: toastId,
                    });
                    form.reset();
                  } catch (err) {
                    console.error(err);
                    toast.error("❌ Failed to send booking inquiry.", {
                      id: toastId,
                    });
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                <div className="booknow-form-row">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message / Questions"
                  required
                ></textarea>
                <button type="submit" disabled={submitting}>
                  {submitting ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
            {/* --- Description --- */}
            <div className="booknow-card booknow-description">
              <h2>Description</h2>
              <p>{tour.description}</p>
            </div>
            {/* --- Benefits --- */}
            {tour.benefitHighlights?.length > 0 && (
              <div className="booknow-card booknow-benefits">
                <h2>Tour Benefit Highlights</h2>
                <ul className="booknow-benefits-list">
                  {tour.benefitHighlights.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={18} className="booknow-check-icon" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* --- Integral FAQs --- */}
            {(tour.integralFaqs?.length > 0 || tour.mainFaqs?.length > 0) && (
              <div className="booknow-faqs-container">
                <div className="faq-tabs">
                  <button
                    className={`faq-tab ${
                      openFaqs.activeTab === "integralFaqs" ? "active" : ""
                    }`}
                    onClick={() =>
                      setOpenFaqs((prev) => ({
                        ...prev,
                        activeTab: "integralFaqs",
                      }))
                    }
                  >
                    Itinerary FAQs
                  </button>

                  <button
                    className={`faq-tab ${
                      openFaqs.activeTab === "mainFaqs" ? "active" : ""
                    }`}
                    onClick={() =>
                      setOpenFaqs((prev) => ({
                        ...prev,
                        activeTab: "mainFaqs",
                      }))
                    }
                  >
                    Main FAQs
                  </button>
                </div>

                <div className="faq-tab-content">
                  {openFaqs.activeTab === "integralFaqs" &&
                    tour.integralFaqs?.map((faq, i) => (
                      <div
                        key={i}
                        className={`faq-item ${
                          openFaqs.integralFaqs === i ? "open" : ""
                        }`}
                      >
                        <button
                          className="faq-question"
                          onClick={() => toggleFaq("integralFaqs", i)}
                        >
                          <BookOpen size={20} className="faq-icon" />
                          <span>{faq.question}</span>
                          <svg
                            className={`chevron ${
                              openFaqs.integralFaqs === i ? "rotate" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        <div
                          className="faq-answer"
                          style={{
                            maxHeight:
                              openFaqs.integralFaqs === i ? "500px" : "0px",
                          }}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    ))}

                  {openFaqs.activeTab === "mainFaqs" &&
                    tour.mainFaqs?.map((faq, i) => (
                      <div
                        key={i}
                        className={`faq-item ${
                          openFaqs.mainFaqs === i ? "open" : ""
                        }`}
                      >
                        <button
                          className="faq-question"
                          onClick={() => toggleFaq("mainFaqs", i)}
                        >
                          <HelpCircle size={20} className="faq-icon" />
                          <span>{faq.question}</span>
                          <svg
                            className={`chevron ${
                              openFaqs.mainFaqs === i ? "rotate" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        <div
                          className="faq-answer"
                          style={{
                            maxHeight:
                              openFaqs.mainFaqs === i ? "500px" : "0px",
                          }}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {tour.costPackages?.length > 0 && (
              <div className="tour-cost-section">
                <h2 className="tour-cost-title">Tour Cost</h2>

                <div className="tour-cost-table-wrapper">
                  <table className="tour-cost-table">
                    <thead>
                      <tr>
                        <th>Package Name</th>
                        <th>Price</th>
                        <th>Kids Discount</th>
                        <th>Group Discount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tour.costPackages.map((pkg, index) => (
                        <tr key={index}>
                          <td>{pkg.packageName}</td>
                          <td>
                            ₹
                            {parseFloat(pkg.price).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </td>
                          <td>{pkg.kidsDiscount}</td>
                          <td>{pkg.groupDiscount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* --- Included/Excluded --- */}
            <div className="booknow-card booknow-included-excluded">
              <div className="included">
                <div className="included-heading">
                  <Briefcase size={38} className="heading-icon included-icon" />
                  <h3>Included</h3>
                </div>
                <ul>
                  {tour.included?.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={18} className="booknow-check-icon" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="excluded">
                <div className="excluded-heading">
                  <AlertTriangle
                    size={38}
                    className="heading-icon excluded-icon"
                  />
                  <h3>Excluded</h3>
                </div>
                <ul>
                  {tour.excluded?.map((item, i) => (
                    <li key={i}>
                      <XCircle size={18} className="x-icon" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {tour.infoFaqs && tour.infoFaqs.length > 0 && (
              <div className="booknow-faqs-container">
                {/* <h2 className="faq-section-title">Info FAQs</h2> */}
                {tour.infoFaqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`faq-item ${
                      openFaqs.infoFaqs === i ? "open" : ""
                    }`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq("infoFaqs", i)}
                    >
                      <Info size={20} className="faq-icon" />
                      <span>{faq.question}</span>
                      <svg
                        className={`chevron ${
                          openFaqs.infoFaqs === i ? "rotate" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <div
                      className="faq-answer"
                      style={{
                        maxHeight: openFaqs.infoFaqs === i ? "500px" : "0px",
                      }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="booknow-card booknow-trip-info">
              <div className="trip-info-header">
                <h3>Short Trip Information</h3>
              </div>

              <div className="booknow-trip-info-grid">
                {visibleItems.map((item, index) => (
                  <div className="booknow-trip-info-item" key={index}>
                    <div className="booknow-trip-info-icon">{item.icon}</div>
                    <div className="booknow-trip-info-content">
                      <strong>{item.label}</strong>
                      <span>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {tripInfoItems.length > 4 && (
                <div className="trip-info-toggle">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="trip-info-btn"
                  >
                    {showAll ? "Show Less" : "Show All"}
                  </button>
                </div>
              )}
            </div>

          
          </div>
          <div className="booknow-right-col">
            {/* Pricing Section */}
            <div className="booknow-card booknow-pricing-card">
              <h3>Pricing</h3>

              {/* If there are multiple batches */}
              {tour.batches && tour.batches.length > 0 && (
                <div className="booknow-batch-section">
                  <h4>Select Batch</h4>
                  <div className="booknow-batch-buttons">
                    {tour.batches.map((batch, index) => (
                      <button
                        key={index}
                        className={`booknow-batch-btn ${
                          selectedBatch === index ? "active" : ""
                        }`}
                        onClick={() => setSelectedBatch(index)}
                      >
                        {batch.name}
                      </button>
                    ))}
                  </div>

                  {selectedBatch !== null && (
                    <div className="booknow-batch-details">
                      <div className="batch-date-card">
                        <div className="batch-date-item">
                          <i className="fa-solid fa-calendar-day"></i>
                          <div>
                            <span className="batch-label">Start Date</span>
                            <span className="batch-date">
                              {new Date(
                                tour.batches[selectedBatch].startDate
                              ).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                        <div className="batch-date-item">
                          <i className="fa-solid fa-calendar-check"></i>
                          <div>
                            <span className="batch-label">End Date</span>
                            <span className="batch-date">
                              {new Date(
                                tour.batches[selectedBatch].endDate
                              ).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="booknow-price-item">
                <span>From</span>
                <div>
                  {tour.discount > 0 && (
                    <span className="original-price">₹{tour.price}</span>
                  )}
                  <span className="price">
                    ₹
                    {tour.discount > 0
                      ? (tour.price * (1 - tour.discount / 100)).toFixed(2)
                      : tour.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
