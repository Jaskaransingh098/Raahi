import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import axios from "axios";
import { Star, ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import api from "../../api";
import CardSwap, { Card } from "../AutoCardSwap/CardSwap";
import "./Body.css";
import { useNavigate, Link } from "react-router-dom";

const AwardIcon = () => (
  <svg
    className="home-aboutus-award-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 1.5l2.351 7.236h7.649l-6.18 4.482 2.352 7.236-6.172-4.482-6.172 4.482 2.352-7.236-6.18-4.482h7.649z" />
  </svg>
);

const FriendlyGuideIcon = () => (
  <svg
    className="home-aboutus-feature-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const SafetyTravelIcon = () => (
  <svg
    className="home-aboutus-feature-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    className={`top-picks-star-icon ${filled ? "filled" : ""}`}
    viewBox="0 0 24 24"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

const TentIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3l10 12H2L12 3zM12 15v5"></path>
  </svg>
);
const KayakIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 12l-3-3-3 3h-4l-3-3-3 3H2"></path>
    <path d="M2 12h20v2H2z"></path>
  </svg>
);
const BungeeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2v8m0 4v8m-4-4h8"></path>
  </svg>
);
const CanoeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M2 12h20v2H2z"></path>
    <path d="M5 12l2-4h10l2 4"></path>
  </svg>
);
const ZiplineIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 3l18 18M21 3L3 21"></path>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);
const BikeIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="5.5" cy="17.5" r="3.5"></circle>
    <circle cx="18.5" cy="17.5" r="3.5"></circle>
    <path d="M15 17.5l-3.5-5 2-5h3l2 5-3.5 5zM5.5 17.5H9"></path>
  </svg>
);

const PopularDestinationsIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5">
    <path d="M9 20v-8h6v8" />
    <path d="M2 11l10-9 10 9" />
    <path d="M12 22V12" />
  </svg>
);
const TouristSatisfactionIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5">
    <path d="M7 11v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1z" />
    <path d="M14 10h.01" />
  </svg>
);
const YearsExperienceIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5">
    <path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z" />
    <path d="M15 11h.01" />
  </svg>
);
const CheckmarkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    className="testimonials-quote-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"></path>
  </svg>
);

const ExpertlyExperiencesIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);
const SeamlessTravelPlanIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const AllInclusivePackagesIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
const PassionateQualityTravelIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);
const LocationPinIcon = () => (
  <svg className="why-choose-us-pin-icon" viewBox="0 0 384 512">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 0 1-35.464 0z" />
  </svg>
);

function Body() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openDropdown, setOpenDropdown] = useState(null);
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);

  const [selectedActivity, setSelectedActivity] = useState("Trip Type");
  const [selectedDuration, setSelectedDuration] = useState("Select Duration");
  const [selectedPrice, setSelectedPrice] = useState("Select Price");

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleSelect = (dropdownName, value) => {
    if (dropdownName === "activity") setSelectedActivity(value);
    if (dropdownName === "duration") setSelectedDuration(value);
    if (dropdownName === "price") setSelectedPrice(value);
    setOpenDropdown(null); // Close dropdown after selecting
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      activity: selectedActivity,
      duration: selectedDuration,
      price: selectedPrice,
    }).toString();

    navigate(`/tours?${queryParams}`);
  };

  // Effect to add and clean up mouse move event listener
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const destinations = [
    // {
    //   image:
    //     "https://i.redd.it/beautiful-sahyadri-mountain-ranges-v0-piiwbrx7fuad1.jpg?width=3119&format=pjpg&auto=webp&s=77c370c3d5dbd2490dbccd994c23789a87f38fd1",
    //   tours: "10",
    //   country: "Shayadri",
    // },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/960px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
      tours: "10",
      country: "Himalayan Treks",
    },
    {
      image:
        "https://www.swantour.com/blogs/wp-content/uploads/2019/05/Leh-Ladakh-Bike-Trip.jpg",
      tours: "08",
      country: "Bikers Special",
    },
    {
      image:
        "https://adventureconsultants.com/uploads/Landing-Pages/Home/Pheriche-trekking-Caro-1000x.jpg",
      tours: "10",
      country: "Customized",
    },
    // {
    //   image:
    //     "https://images.blacktomato.com/2024/07/Ladakh3.jpg?auto=compress%2Cformat&fit=crop&h=800&ixlib=php-3.3.1&q=82&w=1520&s=5451be49358d2a7f8142ecf8fbfc2f8d",
    //   tours: "08",
    //   country: "Ladakh",
    // },
  ];

  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate the array for a seamless infinite loop
  const extendedDestinations = [...destinations, ...destinations];

  // Auto-scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    const startAutoScroll = () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(scroll);
    };

    const stopAutoScroll = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    // Start scrolling automatically
    let autoScrollTimeout = setTimeout(startAutoScroll, 4000);

    const handleInteraction = () => {
      stopAutoScroll();
      clearTimeout(autoScrollTimeout);
      autoScrollTimeout = setTimeout(startAutoScroll, 4000); // Restart after 4s of inactivity
    };

    slider.addEventListener("mousedown", handleInteraction);
    slider.addEventListener("wheel", handleInteraction);

    return () => {
      stopAutoScroll();
      clearTimeout(autoScrollTimeout);
      slider.removeEventListener("mousedown", handleInteraction);
      slider.removeEventListener("wheel", handleInteraction);
    };
  }, []);

  // Manual drag handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    sliderRef.current.classList.add("dragging");
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    sliderRef.current.classList.remove("dragging");
  };

  const onMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.classList.remove("dragging");
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The multiplier increases scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
  const [tours, setTours] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await api.get("/api/tours");
        setTours(response.data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 992) {
        setCardsPerPage(2);
      } else if (window.innerWidth <= 1200) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(4);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    // Allow sliding until the last group of cards is fully visible
    if (newIndex <= tours.length - cardsPerPage) {
      setCurrentIndex(newIndex);
    }
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  const totalPages =
    tours.length > 0 ? Math.ceil(tours.length / cardsPerPage) : 0;
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled =
    tours.length <= cardsPerPage || currentIndex >= tours.length - cardsPerPage;

  const adventureTypes = [
    { icon: <TentIcon />, name: "Tent Camping" },
    { icon: <KayakIcon />, name: "Adventure Of Kayaking" },
    { icon: <BungeeIcon />, name: "Bungee Jump" },
    { icon: <CanoeIcon />, name: "Adventure of Canoeing" },
    { icon: <ZiplineIcon />, name: "Adventure Of Zip Lines" },
    { icon: <BikeIcon />, name: "Mountain Biking" },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = section;
      const moveX = (clientX / offsetWidth - 0.5) * 2;
      const moveY = (clientY / offsetHeight - 0.5) * 2;

      section.querySelectorAll(".home-popular-bg-icon").forEach((icon) => {
        const factorX = parseFloat(icon.dataset.factorX) || 0;
        const factorY = parseFloat(icon.dataset.factorY) || 0;
        icon.style.transform = `translate(${moveX * factorX}px, ${
          moveY * factorY
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Function to calculate parallax style for each icon
  const calculateParallax = (strength) => {
    const { x, y } = mousePosition;
    const xOffset = -(x / window.innerWidth - 0.5) * strength;
    const yOffset = -(y / window.innerHeight - 0.5) * strength;
    return {
      transform: `translate(${xOffset}px, ${yOffset}px)`,
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          // observer.disconnect(); // Run only once
        } else {
          setStartCounting(false);
        }
      },
      { threshold: 0.3 } // Start when 30% of section is visible
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // --- Testimonial Data --- //
  const testimonialsData = [
    {
      id: 1,
      author: "Jatin Kumar",
      email: "Jatin10@gmail.com",
      rating: 5,
      quote:
        "Even when we had a small hiccup with our hotel check-in, the support team handled it immediately. Very responsive and professional.",
    },
    {
      id: 2,
      author: "Pooja",
      email: "poojasingh0@gmail.com",
      rating: 4,
      quote:
        "The trip was well organized and smooth overall. The itinerary was great and the team was very helpful throughout.",
    },
    {
      id: 3,
      author: "Arvind Singh",
      email: "arvindsinghhh@gmail.com",
      rating: 5,
      quote:
        "A memorable experience for my family. The guides were friendly and the planning was excellent.",
    },
    {
      id: 4,
      author: "Aman Sharma",
      email: "amansharma2000@gmail.com",
      rating: 4,
      quote:
        "Loved the destinations and support. Everything was managed nicely and we felt safe during the entire journey.",
    },
    {
      id: 5,
      author: "Arjun Malhotra",
      email: "arjun.malhotra@gmail.com",
      rating: 5,
      quote:
        "An amazing Himalayan experience! Highly recommended for anyone looking for a well-planned adventure.",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveTestimonial((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [activeTestimonial]);

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };

  const features = [
    {
      icon: <ExpertlyExperiencesIcon />,
      title: "Expertly Guided Experiences",
      description:
        "From Himalayan treks to Ladakh bike rides, our expert team ensures every adventure is safe, thrilling, and well-planned.",
      isCenter: false,
    },
    {
      icon: <SeamlessTravelPlanIcon />,
      title: "Seamless Adventure Plan",
      description:
        "We handle all the details — permits, routes, safety, and support — so you can focus only on the journey.",
      isCenter: true,
    },
    {
      icon: <AllInclusivePackagesIcon />,
      title: "All-Inclusive Adventure Packages",
      description:
        "From transport and stay to gear, meals, and activities — we’ve got everything covered for a hassle-free trip.",
      isCenter: false,
    },
    {
      icon: <PassionateQualityTravelIcon />,
      title: "Passion for Quality Adventure",
      description:
        "We’re truly dedicated to creating adventures that inspire, challenge, and leave you with memories for life.",
      isCenter: true,
    },
  ];

  const logos = [
    {
      id: 1,
      src: "https://raahioutdoors.com/images/partner/logo5.jpeg",
      alt: "Travel Brand 1",
    },
    {
      id: 2,
      src: "https://raahioutdoors.com/images/partner/logo2.jpeg",
      alt: "Worldfly Brand",
    },
    {
      id: 3,
      src: "https://raahioutdoors.com/images/partner/logo3.jpeg",
      alt: "Travel Brand 2",
    },
    {
      id: 4,
      src: "https://raahioutdoors.com/images/partner/logo1.jpeg",
      alt: "Travel Discount Brand",
    },
    {
      id: 5,
      src: "https://raahioutdoors.com/images/partner/logo2.jpeg",
      alt: "iTravel Brand",
    },
    {
      id: 6,
      src: "https://raahioutdoors.com/images/partner/logo3.jpeg",
      alt: "Travel Brand 3",
    },
    {
      id: 7,
      src: "https://raahioutdoors.com/images/partner/logo4.jpeg",
      alt: "Worldfly Brand 2",
    },
  ];
  const extendedLogos = [...logos, ...logos];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <section class="hero-section">
        <video
          autoPlay
          loop
          muted
          nocontrols
          class="hero-video"
          src="/home-pics/hero-video.mp4"
        ></video>

        <div class="hero-overlay"></div>

        <div className="scroll-down-arrow">
          <span></span>
        </div>
      </section>

      <div className="destinations-section">
        <div className="hero-content">
          <div className="text-container">
            <div
              className={`hero-masked-text ${animate ? "animate-pop" : ""}`}
              aria-hidden="true"
            >
              Welcome to
              <br />
              Eco
              <br />
              Explorers
            </div>
          </div>
        </div>

        <div className="destinations-header">
          <p className="popular-destinations">Popular Adventures</p>
          <h2>
            From thrilling treks to epic bike rides and more, <br /> experience
            most <span className="highlight">unforgettable</span> journeys
          </h2>
        </div>
        <div
          className="destinations-slider"
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {extendedDestinations.map((dest, index) => (
            <div
              className="destination-card"
              key={index}
              onClick={() => navigate(`/ourgallery?category=${dest.country}`)}
              style={{ cursor: "grab" }}
            >
              <img
                src={dest.image}
                alt={dest.country}
                className="destination-image"
              />
              <div className="destination-info">
                {/* <span className="tours-count">{dest.tours}</span> */}
                <p className="country-name">{dest.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="home-aboutus-section">
        <div className="home-aboutus-container">
          {/* Left column with images */}
          <div className="home-aboutus-left">
            <div className="home-aboutus-image-wrapper">
              <img
                src="/home-pics/home-about-us1.jpg"
                alt="Resort pool from above"
                className="home-aboutus-image-main"
              />
            </div>
          </div>

          {/* Right column with text content */}
          <div className="home-aboutus-right">
            <p className="home-aboutus-subtitle">Know About Us</p>
            <h2 className="home-aboutus-title">
              We Believe Adventure is More Than Just a Journey
            </h2>
            <p className="home-aboutus-description">
              We don’t just organize treks and rides—we craft unforgettable
              adventures. With expert guidance, personalized service, and a true
              passion for the outdoors, we ensure every experience is thrilling,
              safe, and inspiring. From Himalayan treks to bike expeditions
              across Ladakh, every detail is designed to make your journey
              extraordinary.
            </p>
            <div className="home-aboutus-features">
              <div className="home-aboutus-feature-item">
                <FriendlyGuideIcon />
                <div>
                  <h4>Friendly Guide</h4>
                  <p>
                    At the heart of every great journey is a great best in the
                    world.
                  </p>
                </div>
              </div>
              <div className="home-aboutus-feature-item">
                <SafetyTravelIcon />
                <div>
                  <h4>Safety Adventure</h4>
                  <p>
                    We go above and beyond ensure that your journey not
                    exciting.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-aboutus-footer">
              <button className="home-aboutus-cta-button">
                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Learn More{" "}
                </Link>
                {/* <span>+</span> */}
              </button>
              <div className="home-aboutus-clients">
                <div className="home-aboutus-client-avatars">
                  <img src="https://i.pravatar.cc/40?img=1" alt="Client 1" />
                  <img src="https://i.pravatar.cc/40?img=2" alt="Client 2" />
                  <img src="https://i.pravatar.cc/40?img=3" alt="Client 3" />
                </div>
                <p>3k Trusted Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-picks-container">
        <div className="top-picks-section">
          <div className="top-picks-header">
            <p className="top-picks-subtitle">Latest Adventures</p>
            <h2 className="top-picks-title">
              Top Upcoming for the Ultimate Adventure
            </h2>
          </div>
          <div className="top-picks-carousel-wrapper">
            <div className="top-picks-carousel">
              <div
                className="top-picks-track"
                style={{
                  transform: `translateX(-${
                    currentIndex *
                    (100 /
                      (tours.length > cardsPerPage
                        ? cardsPerPage
                        : tours.length))
                  }%)`,
                }}
              >
                {tours.map((tour) => (
                  <div className="top-picks-card" key={tour._id}>
                    <div className="top-picks-card-image-container">
                      <img
                        src={tour.image.replace(
                          "http://localhost:5000",
                          "https://wonderlandhimalayas.com"
                        )}
                        alt={tour.title}
                        className="top-picks-card-image"
                      />
                      <span className="top-picks-card-duration">
                        {tour.duration}
                      </span>
                    </div>
                    <div className="top-picks-card-content">
                      <h3 className="top-picks-card-title">{tour.title}</h3>
                      <p className="top-picks-card-location">
                        <MapPin size={14} /> {tour.location}
                      </p>
                      <p className="top-picks-card-description">
                        {tour.description}
                      </p>
                      <div className="top-picks-card-footer">
                        <div className="top-picks-card-price">
                          {tour.discount > 0 && (
                            <span className="original-price">
                              ₹{tour.price}
                            </span>
                          )}
                          <span>
                            ₹
                            {tour.discount
                              ? (
                                  tour.price *
                                  (1 - tour.discount / 100)
                                ).toFixed(0)
                              : tour.price}
                          </span>
                        </div>
                        <Link
                          to={`/book/${tour._id}`}
                          className="top-picks-card-book-btn"
                        >
                          Book Now <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="top-picks-arrow left"
              disabled={isPrevDisabled}
            >
              <ArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="top-picks-arrow right"
              disabled={isNextDisabled}
            >
              <ArrowRight />
            </button>
          </div>
          <div className="top-picks-dots">
            {[...Array(totalPages)].map((_, i) => (
              <span
                key={i}
                className={`top-picks-dot ${
                  Math.floor(currentIndex / cardsPerPage) === i ? "active" : ""
                }`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="discovery-section">
        <div className="discovery-container">
          {/* Left Column */}
          <div className="discovery-left">
            <h1 className="discovery-left-heading">
              Explore the <br />
              <span className="discovery-left-heading1">Extraordinary</span>
            </h1>
            <p className="discovery-left-sub">
              Embark on unforgettable journeys across breathtaking landscapes,
              from the majestic Himalayas to hidden gems waiting to be
              discovered.
            </p>
            {/* <img
              src="https://images.unsplash.com/photo-1573574891299-b1349fb25dd7?q=80&w=1733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel collage with famous landmarks"
              className="discovery-background-image"
            /> */}
            <div ref={statsRef} className="discovery-stats-box">
              <div className="discovery-stat-item">
                <span className="discovery-stat-number">
                  {startCounting ? <CountUp end={800} duration={2} /> : "0"}+
                </span>
                <p className="discovery-stat-label">Popular Destinations</p>
                <div className="discovery-stat-icon">
                  <PopularDestinationsIcon />
                </div>
              </div>

              <div className="discovery-stat-item">
                <span className="discovery-stat-number">
                  {startCounting ? (
                    <CountUp end={95} duration={2} suffix="%" />
                  ) : (
                    "0%"
                  )}
                </span>
                <p className="discovery-stat-label">Tourist Satisfactions</p>
                <div className="discovery-stat-icon">
                  <TouristSatisfactionIcon />
                </div>
              </div>

              <div className="discovery-stat-item">
                <span className="discovery-stat-number">
                  {startCounting ? <CountUp end={16} duration={2} /> : "0"}+
                </span>
                <p className="discovery-stat-label">Years Of Experience</p>
                <div className="discovery-stat-icon">
                  <YearsExperienceIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="discovery-right">
            <p className="discovery-subtitle">Discover Your</p>
            <h2 className="discovery-title">
              Enjoy Adventure Trips Across India
            </h2>
            <p className="discovery-description">
              Adventure isn’t just about reaching a destination — it’s about
              discovery, thrill, and unforgettable moments. From trekking the
              Himalayas to riding through Ladakh, camping in the wilderness, or
              rafting down rivers, we craft experiences that inspire every
              explorer.
            </p>
            <div className="discovery-details-wrapper">
              {/* <img
                src="https://html.pixelfit.agency/tripex/assets/images/home-one/gallery/features-img1.jpg"
                alt="Father and son looking at a map"
                className="discovery-adventure-image"
              /> */}
              <ul className="discovery-features-list">
                <li>
                  <CheckmarkIcon /> Seamless Booking Experience
                </li>
                <li>
                  <CheckmarkIcon /> Local Experience & Authenticity
                </li>
                <li>
                  <CheckmarkIcon /> Save & Security Travels
                </li>
                <button className="discovery-cta-button">
                  <Link
                    to="/tours"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Start yours
                  </Link>
                  <span className="exclusive-offer-button-icon">
                    <ArrowRightIcon />
                  </span>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <p className="testimonials-subtitle">Clients Testimonials</p>
            <h2 className="testimonials-title">
              Real Stories, Real Adventures
            </h2>
          </div>

          <div className="testimonials-content-wrapper">
            <div className="testimonials-left">
              <div className="testimonials-image-collage">
                <img
                  src="/home-pics/home-testimonial1.jpg"
                  alt="Traveler with globe"
                  className="testimonials-main-img"
                />
                <img
                  src="https://html.pixelfit.agency/tripex/assets/images/home-one/testimonial/testimonial-img1.jpg"
                  alt="Traveler 1"
                  className="testimonials-sub-img testimonials-sub-img-1"
                />
                <img
                  src="https://html.pixelfit.agency/tripex/assets/images/home-one/testimonial/testimonial-img2.jpg"
                  alt="Traveler 2"
                  className="testimonials-sub-img testimonials-sub-img-2"
                />
              </div>
            </div>

            <div className="testimonials-right">
              <div className="testimonials-slider-container">
                <div
                  className="testimonials-slider-track"
                  style={{
                    transform: `translateX(-${activeTestimonial * 100}%)`,
                  }}
                >
                  {testimonialsData.map((testimonial) => (
                    <div className="testimonials-card" key={testimonial.id}>
                      <div className="testimonials-card-header">
                        <QuoteIcon />
                        {/* <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="testimonials-avatar"
                        /> */}
                        <div className="testimonials-author-info">
                          <h4>{testimonial.author}</h4>
                          <p className="testimonial-email">
                            {testimonial.email}
                          </p>

                          <div className="testimonials-rating">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                filled={i < testimonial.rating}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="testimonials-quote">{testimonial.quote}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="testimonials-dots">
                {testimonialsData.map((_, idx) => (
                  <div
                    key={idx}
                    className={`testimonials-dot ${
                      activeTestimonial === idx ? "active" : ""
                    }`}
                    onClick={() => handleDotClick(idx)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <div className="why-choose-us-container">
          {/* Left Column */}
          <div className="why-choose-us-left">
            <div className="why-choose-us-header">
              <p className="why-choose-us-subtitle">Why Choose Us</p>
              <h2 className="why-choose-us-title">
                We Make Adventures Easy & Unforgettable
              </h2>
            </div>
            <div className="why-choose-us-features-grid">
              {features.map((feature, index) => (
                <div
                  className={`why-choose-us-feature-card ${
                    feature.isCenter ? "center-card" : ""
                  }`}
                  key={index}
                >
                  <div className="why-choose-us-icon-wrapper">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="why-choose-us-right">
            <div className="why-choose-us-image-wrapper">
              <img
                src="/home-pics/home-why.jpg"
                alt="Airplane"
                className="why-choose-us-plane-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
