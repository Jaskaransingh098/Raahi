import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
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
} from "lucide-react";
import "./BookNow.css";

export default function BookNow() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/tours/${id}`)
      .then((res) => setTour(res.data))
      .catch((err) => console.error("Error fetching tour:", err));
  }, [id]);

  const staticData = {
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    benefitHighlights: [
      "Expertly Curated Itineraries",
      "Local Guides & Authentic Experiences",
      "Comfortable Transportation & Stays",
      "Hassle-Free Travel Planning",
      "Small Group Or Private Tours",
      "24/7 Customer Support",
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
    included: [
      "Tent stay at all campsites on triple sharing basis",
      "Camping/Home stay at base village Lohajung",
      "Pickup & drop from Dehradun to Lohajung and back",
      "Gaiters, micro-spikes, ropes (if required)",
      "First aid kit, medical kit, and oxygen cylinder for emergencies",
      "Nutritious veg meals during the trek (from Day 1 dinner to last day breakfast)",
      "All forest entry charges and trek permits",
      "Experienced RAAHi trek leaders and support staff",
      "Guide charges included",
      "RAAHi trek organizing and expertise fee",
    ],

    excluded: [
      "Any kind of personal expenses",
      "Meals during transit (while traveling from Dehradun to Lohajung and back)",
      "Travel/trek insurance",
      "Mules or porters for personal luggage",
      "Emergency evacuation charges, if any",
      "Anything not mentioned specifically in the ‘Inclusions’ section",
      "5% GST",
    ],
    pricing: [
      { label: "From per adult", price: 183, originalPrice: 283 },
      { label: "From per child", price: 149, originalPrice: 283 },
      { label: "From per infant", price: 135, originalPrice: 283 },
    ],
  };

  if (!tour) {
    return (
      <div className="booknow-loading">
        <div className="booknow-spinner"></div>
      </div>
    );
  }

  return (
    <div className="booknow-page">
      <div className="booknow-container">
        <header className="booknow-header">
          <img
            src={tour.image || staticData.images[0]}
            alt={tour.title}
            className="booknow-header-img"
          />
          <img
            src={staticData.images[1]}
            alt="Landmarks"
            className="booknow-header-img"
          />
        </header>
        <main className="booknow-main-content">
          <div className="booknow-left-col">
            {/* --- Tour Info --- */}
            <div className="booknow-card booknow-tour-info">
              <div className="booknow-meta-info">
                <span className="booknow-rating">
                  <Star size={16} className="star-icon" /> 4.8 (1.3k reviews)
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
            {/* --- Description --- */}
            <div className="booknow-card booknow-description">
              <h2>Description</h2>
              <p>{tour.description}</p>
            </div>
            {/* --- Benefits --- */}
            <div className="booknow-card booknow-benefits">
              <h2>Tour Benefit Highlights</h2>
              <ul className="booknow-benefits-list">
                {staticData.benefitHighlights.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className="booknow-check-icon" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* --- Trip Info --- */}
            <div className="booknow-card booknow-trip-info">
              <div className="booknow-trip-info-grid">
                <div className="booknow-trip-info-item">
                  <div className="booknow-trip-info-icon">
                    <Bed size={24} />
                  </div>
                  <strong>Accommodation</strong>
                  <span>{staticData.tripInfo.accommodation}</span>
                </div>
                <div className="booknow-trip-info-item">
                  <div className="booknow-trip-info-icon">
                    <Plane size={24} />
                  </div>
                  <strong>Tour Availability</strong>
                  <span>{staticData.tripInfo.tourAvailability}</span>
                </div>
                <div className="booknow-trip-info-item">
                  <div className="booknow-trip-info-icon">
                    <Users size={24} />
                  </div>
                  <strong>Trip Guide</strong>
                  <span>{staticData.tripInfo.tripGuide}</span>
                </div>
                <div className="booknow-trip-info-item">
                  <div className="booknow-trip-info-icon">
                    <Car size={24} />
                  </div>
                  <strong>Transportation</strong>
                  <span>{staticData.tripInfo.transportation}</span>
                </div>
                <div className="booknow-trip-info-item">
                  <div className="booknow-trip-info-icon">
                    <Sun size={24} />
                  </div>
                  <strong>Activities</strong>
                  <span>{staticData.tripInfo.activities}</span>
                </div>
                <div className="booknow-trip-info-item">
                  <div className="booknow-trip-info-icon">
                    <Mountain size={24} />
                  </div>
                  <strong>Trip Type</strong>
                  <span>{staticData.tripInfo.tripType}</span>
                </div>
                <div className="booknow-trip-info-item">
                  <div className="booknow-trip-info-icon">
                    <Wifi size={24} />
                  </div>
                  <strong>Wifi</strong>
                  <span>{staticData.tripInfo.wifi}</span>
                </div>
                {/* <div className="booknow-trip-info-item">
                  <div className="booknow-trip-info-icon">
                    <CheckCircle2 size={24} />
                  </div>
                  <strong>Free Cancel</strong>
                  <span>{staticData.tripInfo.freeCancel}</span>
                </div> */}
              </div>
            </div>
            {/* --- Included/Excluded --- */}
            <div className="booknow-card booknow-included-excluded">
              <div>
                <h3>Included</h3>
                <ul>
                  {staticData.included.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={18} className="booknow-check-icon" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="excluded">
                <h3>Excluded</h3>
                <ul>
                  {staticData.excluded.map((item, i) => (
                    <li key={i}>
                      <XCircle size={18} className="x-icon" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* --- Contact Form --- */}
            <div className="booknow-card booknow-contact-form-card">
              <h2>Send Us a Message for {tour.title}</h2>
              <form className="booknow-contact-form">
                <div className="booknow-form-row">
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                </div>
                <textarea
                  placeholder="Your Message / Questions"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
          <div className="booknow-right-col">
            {/* --- Share --- */}
            <div className="booknow-card booknow-share-card">
              <strong>Share</strong>
              <div className="booknow-share-icons">
                <a href="#">
                  <Facebook size={20} />
                </a>
                <a href="#">
                  <Twitter size={20} />
                </a>
                <a href="#">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            {/* --- Pricing --- */}
            <div className="booknow-card booknow-pricing-card">
              <h3>Pricing</h3>
              <div className="booknow-price-item">
                <span>From per adult</span>
                <div>
                  {tour.discount && (
                    <span className="original-price">${tour.price}</span>
                  )}
                  <span className="price">
                    {" "}
                    $
                    {tour.discount
                      ? (tour.price * (1 - tour.discount / 100)).toFixed(2)
                      : tour.price}
                  </span>
                </div>
              </div>
              {/* Static pricing for child/infant */}
              <div className="booknow-price-item">
                <span>From per child</span>
                <div>
                  <span className="original-price">$283</span>
                  <span className="price"> $149</span>
                </div>
              </div>
              <div className="booknow-price-item">
                <span>From per infant</span>
                <div>
                  <span className="original-price">$283</span>
                  <span className="price"> $135</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
