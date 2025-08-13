import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./Body.css";

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
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);

  const [selectedDestination, setSelectedDestination] =
    useState("Where to next");
  const [selectedActivity, setSelectedActivity] = useState("Trip Type");
  const [selectedDuration, setSelectedDuration] = useState("Select Duration");
  const [selectedGuests, setSelectedGuests] = useState("Number of Guests");

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleSelect = (dropdownName, value) => {
    if (dropdownName === "destinations") setSelectedDestination(value);
    if (dropdownName === "activity") setSelectedActivity(value);
    if (dropdownName === "duration") setSelectedDuration(value);
    if (dropdownName === "guests") setSelectedGuests(value);
    setOpenDropdown(null); // Close dropdown after selecting
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
    {
      image:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tours: "10 Tours",
      country: "Switzerland",
    },
    {
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tours: "10 Tours",
      country: "Thailand",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tours: "08 Tours",
      country: "Italy",
    },
    {
      image:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tours: "10 Tours",
      country: "Switzerland",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tours: "08 Tours",
      country: "France",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542317854-f9593e157879?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tours: "4 Tours",
      country: "Tours",
    },
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

  const tours = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Popular",
      tagColor: "orange",
      duration: "3 Days - 2 Night",
      rating: 4.5,
      reviews: "2k",
      title: "Viewpoint at Nangyuan Island",
      location: "Bali, Indonesia",
      description:
        "Being dramatically 200 meters above the surrounding jungle, this ancient rock...",
      price: 350,
      maxGroup: 7,
      guest: 2,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "3 Days - 2 Night",
      rating: 4.5,
      reviews: "2k",
      title: "Pool relaxation garden",
      location: "Bali, Indonesia",
      description:
        "Being dramatically 200 meters above the surrounding jungle, this ancient rock...",
      price: 350,
      maxGroup: 7,
      guest: 2,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1586798271654-09511b3af8a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Honeymoon",
      tagColor: "blue",
      duration: "3 Days - 2 Night",
      rating: 4.5,
      reviews: "2k",
      title: "Beautiful Diamond Beach",
      location: "Bali, Indonesia",
      description:
        "Being dramatically 200 meters above the surrounding jungle, this ancient rock...",
      price: 350,
      maxGroup: 7,
      guest: 2,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723a996f329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "3 Days - 2 Night",
      rating: 4.5,
      reviews: "2k",
      title: "Nangyuan Island(Thailand)",
      location: "Phuket",
      description:
        "Being dramatically 200 meters above the surrounding jungle, this ancient rock...",
      price: 350,
      maxGroup: 7,
      guest: 2,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Adventure",
      tagColor: "orange",
      duration: "5 Days - 4 Nights",
      rating: 4.8,
      reviews: "3.1k",
      title: "Santorini Caldera Trail",
      location: "Santorini, Greece",
      description:
        "Hike along the stunning caldera cliffs, offering breathtaking views of the Aegean Sea.",
      price: 600,
      maxGroup: 10,
      guest: 2,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Culture",
      tagColor: "blue",
      duration: "7 Days - 6 Nights",
      rating: 4.9,
      reviews: "4.5k",
      title: "Kyoto Ancient Temples Tour",
      location: "Kyoto, Japan",
      description:
        "Explore the serene beauty of Kinkaku-ji, Fushimi Inari, and other historic temples.",
      price: 850,
      maxGroup: 8,
      guest: 2,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1506741474023-4a136a035e08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "4 Days - 3 Nights",
      rating: 4.6,
      reviews: "1.8k",
      title: "Great Ocean Road Discovery",
      location: "Victoria, Australia",
      description:
        "Witness the majestic Twelve Apostles and lush rainforests on this iconic road trip.",
      price: 420,
      maxGroup: 12,
      guest: 2,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Nature",
      tagColor: "orange",
      duration: "3 Days - 2 Night",
      rating: 4.7,
      reviews: "2.5k",
      title: "Banff National Park Lakes",
      location: "Alberta, Canada",
      description:
        "Experience the turquoise waters of Lake Louise and Moraine Lake in the Rockies.",
      price: 550,
      maxGroup: 6,
      guest: 2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4; // As seen in the image

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
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

  const totalPages = Math.ceil(tours.length / cardsPerPage);

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
      author: "Michael S. Heslin",
      title: "World Traveler",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      quote:
        "“Even when we had small hiccup with our hotel check-in to support team handled it immediately. It's rare to find such travel and family responsive!”",
    },
    {
      id: 2,
      author: "Sarah Jennings",
      title: "Adventure Seeker",
      avatar: "https://i.pravatar.cc/150?img=6",
      rating: 5,
      quote:
        "“The entire trip was flawlessly organized. From the flights to the tours, everything was perfect. I can't wait to book my next adventure with them.”",
    },
    {
      id: 3,
      author: "David Chen",
      title: "Family Vacationer",
      avatar: "https://i.pravatar.cc/150?img=7",
      rating: 4,
      quote:
        "“A truly memorable experience for my family. The guides were knowledgeable and friendly, and the itinerary was packed with amazing activities.”",
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
      title: "Expertly Experiences",
      description: "We specialize in journeys that blend comfort culture",
      isCenter: false,
    },
    {
      icon: <SeamlessTravelPlanIcon />,
      title: "Seamless Travel Plan",
      description: "We make the entire process smooth and stress-free",
      isCenter: true,
    },
    {
      icon: <AllInclusivePackagesIcon />,
      title: "All-Inclusive Packages",
      description: "From flights accommodation sightseeing and activities",
      isCenter: false,
    },
    {
      icon: <PassionateQualityTravelIcon />,
      title: "Passionate Quality Travel",
      description: "We are genuinely dedicated turning dream vacation",
      isCenter: true,
    },
  ];

  const logos = [
    { id: 1, src: "https://raahioutdoors.com/images/partner/logo5.jpeg", alt: "Travel Brand 1" },
    { id: 2, src: "https://raahioutdoors.com/images/partner/logo2.jpeg", alt: "Worldfly Brand" },
    { id: 3, src: "https://raahioutdoors.com/images/partner/logo3.jpeg", alt: "Travel Brand 2" },
    {
      id: 4,
      src: "https://raahioutdoors.com/images/partner/logo1.jpeg",
      alt: "Travel Discount Brand",
    },
    { id: 5, src: "https://raahioutdoors.com/images/partner/logo2.jpeg", alt: "iTravel Brand" },
    { id: 6, src: "https://raahioutdoors.com/images/partner/logo3.jpeg", alt: "Travel Brand 3" },
    {
      id: 7,
      src: "https://raahioutdoors.com/images/partner/logo4.jpeg",
      alt: "Worldfly Brand 2",
    },
  ];
  const extendedLogos = [...logos, ...logos];

  return (
    <>
      <section className="hero-section">
        {/* Background decorative icons with parallax effect */}
        <div className="hero-background-icons">
          <div className="bg-icon icon-plane" style={calculateParallax(30)}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12.67C22 12.22 21.78 11.8 21.38 11.64L15.35 9.27L13.5 3.5C13.34 3.1 12.93 2.81 12.5 2.81C12.07 2.81 11.66 3.1 11.5 3.5L9.65 9.27L3.62 11.64C3.22 11.8 3 12.22 3 12.67C3 13.12 3.22 13.54 3.62 13.7L9.65 16.07L11.5 21.84C11.66 22.24 12.07 22.53 12.5 22.53C12.93 22.53 13.34 22.24 13.5 21.84L15.35 16.07L21.38 13.7C21.78 13.54 22 13.12 22 12.67Z"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="bg-icon icon-balloon" style={calculateParallax(20)}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2V6"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14L8 22"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14L16 22"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H3"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H19"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="bg-icon icon-coconut" style={calculateParallax(25)}>
            <svg
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 15.5C15.5 16.3284 14.8284 17 14 17C13.1716 17 12.5 16.3284 12.5 15.5C12.5 14.6716 13.1716 14 14 14C14.8284 14 15.5 14.6716 15.5 15.5Z"
                fill="#4CAF50"
              />
              <path
                d="M8.5 15.5C8.5 16.3284 7.82843 17 7 17C6.17157 17 5.5 16.3284 5.5 15.5C5.5 14.6716 6.17157 14 7 14C7.82843 14 8.5 14.6716 8.5 15.5Z"
                fill="#4CAF50"
              />
              <path
                d="M12 12C10.8954 12 10 11.1046 10 10"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="bg-icon icon-luggage" style={calculateParallax(15)}>
            <svg
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6"
                y="4"
                width="12"
                height="18"
                rx="2"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 4V2H14V4"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 10H18"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="bg-icon icon-cloud" style={calculateParallax(10)}>
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H18"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 10H4C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14H6"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18V20C12 21.1046 11.1046 22 10 22H8"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18V20C12 21.1046 12.8954 22 14 22H16"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10H16C18.2091 10 20 8.20914 20 6C20 3.79086 18.2091 2 16 2Z"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Main content grid */}
        <div className="hero-content-grid">
          <div className="hero-text-content">
            <p className="hero-welcome-text">Welcome to Travel & Adventure</p>
            <h1 className="hero-headline">
              Explore Beyond
              <br />
              Limits, <img
                src="/home-pics/hero-thumb-img.jpg"
                alt="travel"
              />{" "}
              Travel
              <br />
              Beyond Ordinary
            </h1>
            <p className="hero-subheading">
              More than 10,300+ most popular destinations
            </p>
            <div className="hero-buttons">
              <button className="btn btn-explore">Explore More</button>
            </div>
          </div>
          <div className="hero-image-content">
            <img
              src="/home-pics/hero-img1.png"
              alt="Tourist with luggage"
              className="hero-main-image"
            />
          </div>
        </div>

        <div className="svg-shape-wrapper">
          <svg className="wave" viewBox="0 0 2 1" preserveAspectRatio="none">
            <defs>
              <path
                id="w"
                d="M0 1V0.5 Q0.5 1 1 0.5 T2 0.5 3 0.5 4 0.5 V1 Z"
              ></path>
            </defs>
            <g>
              <use href="#w" fill="rgba(236, 225, 201, 0.81)"></use>
            </g>
          </svg>
          <svg className="wave" viewBox="0 0 2 1" preserveAspectRatio="none">
            <use href="#w" fill="rgba(236, 225, 201, 0.81)"></use>
          </svg>
        </div>
        {/* Search bar at the bottom */}
      </section>
      <div className="hero-search-bar">
        <div className="search-field">
          <div className="search-field-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="search-field-content">
            <label>Destinations</label>
            <div className="custom-dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("destinations")}
              >
                {selectedDestination}
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8
10.293l5.646-5.647a.5.5 0 0 1
.708.708l-6 6a.5.5 0 0
1-.708 0l-6-6a.5.5 0 0 1
0-.708z"
                  />
                </svg>
              </button>
              <div
                className={`dropdown-menu ${
                  openDropdown === "destinations" ? "show" : ""
                }`}
              >
                <div onClick={() => handleSelect("destinations", "All Destinations")}>
                  All Destinations
                </div>
                <div onClick={() => handleSelect("destinations", "Himachal Pradesh")}>
                  Himachal Pradhesh
                </div>
                <div
                  onClick={() => handleSelect("destinations", "Uttrakhand")}
                >
                  Uttrakhand
                </div>
                <div
                  onClick={() => handleSelect("destinations", "Rajasthan")}
                >
                  Rajasthan
                </div>
                <div
                  onClick={() => handleSelect("destinations", "Goa")}
                >
                  Goa
                </div>
                <div
                  onClick={() => handleSelect("destinations", "Ladakh")}
                >
                  Ladakh
                </div>
                <div
                  onClick={() => handleSelect("destinations", "Bhutan")}
                >
                  Bhutan
                </div>
                <div
                  onClick={() => handleSelect("destinations", "Nepal")}
                >
                  Nepal
                </div>
                <div
                  onClick={() => handleSelect("destinations", "International")}
                >
                  International
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-field">
          <div className="search-field-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div className="search-field-content">
            <label>Activity</label>
            <div className="custom-dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("activity")}
              >
                {selectedActivity}
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8
10.293l5.646-5.647a.5.5 0 0 1
.708.708l-6 6a.5.5 0 0
1-.708 0l-6-6a.5.5 0 0 1
0-.708z"
                  />
                </svg>
              </button>

              <div
                className={`dropdown-menu ${
                  openDropdown === "activity" ? "show" : ""
                }`}
              >
                <div
                  onClick={() => handleSelect("activity", "Trekking")}
                >
                  Trekking
                </div>
                <div onClick={() => handleSelect("activity", "Camping")}>
                  Camping
                </div>
                <div
                  onClick={() => handleSelect("activity", "Road Trip")}
                >
                  Road Trip
                </div>
                <div
                  onClick={() => handleSelect("activity", "Wildlife Safari")}
                >
                  Wildlife Safari
                </div>
                <div
                  onClick={() => handleSelect("activity", "Cycling Trip")}
                >
                  Cycling Trip
                </div>
                <div
                  onClick={() => handleSelect("activity", "Cultural Tour")}
                >
                  Cultural Tour
                </div>
                <div
                  onClick={() => handleSelect("activity", "Adventure Sports")}
                >
                  Adventure Sports
                </div>
                <div
                  onClick={() => handleSelect("activity", "Beach Holiday")}
                >
                  Beach Holiday
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-field">
          <div className="search-field-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div className="search-field-content">
            <label>Duration</label>
            <div className="custom-dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("duration")}
              >
                {selectedDuration}
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8
10.293l5.646-5.647a.5.5 0 0 1
.708.708l-6 6a.5.5 0 0
1-.708 0l-6-6a.5.5 0 0 1
0-.708z"
                  />
                </svg>
              </button>
              <div
                className={`dropdown-menu ${
                  openDropdown === "duration" ? "show" : ""
                }`}
              >
                <div onClick={() => handleSelect("duration", "1 - 3 Days")}>
                  1 - 3 Days
                </div>
                <div onClick={() => handleSelect("duration", "4 - 7 Days")}>
                  4 - 7 Days
                </div>
                <div onClick={() => handleSelect("duration", "8+ Days")}>
                  8+ Days
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-field">
          <div className="search-field-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="search-field-content">
            <label>Guests</label>
            <div className="custom-dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("guests")}
              >
                {selectedGuests}
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8
10.293l5.646-5.647a.5.5 0 0 1
.708.708l-6 6a.5.5 0 0
1-.708 0l-6-6a.5.5 0 0 1
0-.708z"
                  />
                </svg>
              </button>
              <div
                className={`dropdown-menu ${
                  openDropdown === "guests" ? "show" : ""
                }`}
              >
                <div onClick={() => handleSelect("guests", "1 - 2 People")}>
                  1 - 2 People
                </div>
                <div onClick={() => handleSelect("guests", "3 - 5 People")}>
                  3 - 5 People
                </div>
                <div onClick={() => handleSelect("guests", "6+ People")}>
                  6+ People
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="search-button">
          <span>Search</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <div className="destinations-section">
        <div className="destinations-header">
          <p className="popular-destinations">Popular Destinations</p>
          <h2>
            Discover The Amazing Tours Places <br /> Around World,{" "}
            <span className="highlight">50+</span> Countries
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
            <div className="destination-card" key={index}>
              <img
                src={dest.image}
                alt={dest.country}
                className="destination-image"
              />
              <div className="destination-info">
                <span className="tours-count">{dest.tours}</span>
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
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Resort pool from above"
                className="home-aboutus-image-main"
              />
              <div className="home-aboutus-discount-badge">
                <span className="home-aboutus-discount-percent">23%</span>
                <span className="home-aboutus-discount-text">Discount</span>
              </div>
              <div className="home-aboutus-award-box">
                <AwardIcon />
                <p>We're Award Winning Travel Agency</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Beach with palm trees"
                className="home-aboutus-image-secondary"
              />
            </div>
          </div>

          {/* Right column with text content */}
          <div className="home-aboutus-right">
            <p className="home-aboutus-subtitle">Know About Us</p>
            <h2 className="home-aboutus-title">
              We Believe That Travel is More than Just Visiting New Places
              Experience
            </h2>
            <p className="home-aboutus-description">
              We don't just plan trips—we craft unforgettable experiences. With
              expertise, personalized service, and a deep passion for travel, we
              ensure every journey is smooth, safe, and inspiring. From
              handpicked accommodations
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
                  <h4>Safety Travel</h4>
                  <p>
                    We go above and beyond ensure that your journey not
                    exciting.
                  </p>
                </div>
              </div>
            </div>
            <div className="home-aboutus-footer">
              <button className="home-aboutus-cta-button">
                Learn More Us
                {/* <span>+</span> */}
              </button>
              <div className="home-aboutus-clients">
                <div className="home-aboutus-client-avatars">
                  <img src="https://i.pravatar.cc/40?img=1" alt="Client 1" />
                  <img src="https://i.pravatar.cc/40?img=2" alt="Client 2" />
                  <img src="https://i.pravatar.cc/40?img=3" alt="Client 3" />
                </div>
                <p>10m+ Trusted Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-picks-section">
        <div className="top-picks-header">
          <p className="top-picks-subtitle">Popular Tour</p>
          <h2 className="top-picks-title">
            Top Picks for the Ultimate Journey
          </h2>
        </div>
        <div className="top-picks-carousel-wrapper">
          <div className="top-picks-carousel">
            <div
              className="top-picks-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerPage)
                }%)`,
              }}
            >
              {/* Tour Card JSX is now directly mapped here */}
              {tours.map((tour) => (
                <div className="top-picks-card" key={tour.id}>
                  <div className="top-picks-card-image-container">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="top-picks-card-image"
                    />
                    {tour.tag && (
                      <span className={`top-picks-card-tag ${tour.tagColor}`}>
                        {tour.tag}
                      </span>
                    )}
                    <span className="top-picks-card-duration">
                      {tour.duration}
                    </span>
                  </div>
                  <div className="top-picks-card-content">
                    <div className="top-picks-card-rating">
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            filled={i < Math.floor(tour.rating)}
                          />
                        ))}
                      </div>
                      <span>
                        {tour.rating} ({tour.reviews} reviews)
                      </span>
                    </div>
                    <h3 className="top-picks-card-title">{tour.title}</h3>
                    <p className="top-picks-card-location">{tour.location}</p>
                    <p className="top-picks-card-description">
                      {tour.description}
                    </p>
                    <div className="top-picks-card-divider"></div>
                    <div className="top-picks-card-details">
                      <div>
                        <span>Price</span>
                        <strong>${tour.price}</strong>
                      </div>
                      <div>
                        <span>Max Group</span>
                        <strong>{tour.maxGroup}</strong>
                      </div>
                      <div>
                        <span>Guest</span>
                        <strong>{tour.guest}</strong>
                      </div>
                    </div>
                    <button className="top-picks-card-button">
                      Book Now <span>+</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="top-picks-arrow left"
            disabled={currentIndex === 0}
          >
            <ArrowLeftIcon />
          </button>
          <button
            onClick={nextSlide}
            className="top-picks-arrow right"
            disabled={currentIndex >= tours.length - cardsPerPage}
          >
            <ArrowRightIcon />
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
      </section>

      <section className="home-popular-section" ref={sectionRef}>
        

        <div className="home-popular-container">
          <div className="home-popular-header">
            <p className="home-popular-subtitle">Popular Activities</p>
            <h2 className="home-popular-title">
              Adventure. Comfort. Convenience.
            </h2>
          </div>

          <div className="home-popular-main-content">
            <div className="home-popular-left">
              <div className="home-popular-features-grid">
                {adventureTypes.map((item, index) => (
                  <div className="home-popular-feature-card" key={index}>
                    <div className="home-popular-feature-icon">{item.icon}</div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="home-popular-right">
              <div className="home-popular-image-stack">
                <img
                  src="/home-pics/popular-visa.jpg"
                  alt="People jumping on a beach"
                  className="home-popular-image-top"
                />
                <img
                  src="/home-pics/home-popular.jpg"
                  alt="Woman in pink dress on a boat"
                  className="home-popular-image-bottom"
                />
                <div className="home-popular-destinations-badge">
                  <h4>1000+ World Popular Destinations</h4>
                  <div className="home-popular-flags">
                    <img
                      src="https://flagcdn.com/w40/gr.png"
                      alt="Greece Flag"
                    />
                    <img
                      src="https://flagcdn.com/w40/es.png"
                      alt="Spain Flag"
                    />
                    <img
                      src="https://flagcdn.com/w40/pl.png"
                      alt="Poland Flag"
                    />
                    <img
                      src="https://flagcdn.com/w40/jp.png"
                      alt="Japan Flag"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-popular-offers-grid">
            <div className="home-popular-offer-card offer-1">
              <div className="home-popular-offer-content">
                <span className="offer-tag">Supper Offer Services</span>
                <h3>Explore The Travel by Supper Offer</h3>
                <button>
                  Explore More <span className="arrow">→</span>
                </button>
              </div>
              <img
                src="/home-pics/offer-services.png"
                alt="Woman with luggage"
              />
            </div>

            <div className="home-popular-offer-card offer-2">
              <div className="home-popular-offer-content">
                <span className="offer-tag">Get 25% Discount</span>
                <h3>Best Deal For Explore The Modern World</h3>
                <button>
                  Get Discount <span className="arrow">→</span>
                </button>
              </div>
              <img
                src="/home-pics/discount-home.png"
                alt="Girl with yellow suitcase"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="discovery-section">
        <div className="discovery-container">
          {/* Left Column */}
          <div className="discovery-left">
            <img
              src="https://images.unsplash.com/photo-1573574891299-b1349fb25dd7?q=80&w=1733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel collage with famous landmarks"
              className="discovery-background-image"
            />
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
              Enjoy Adventure trip around the world
            </h2>
            <p className="discovery-description">
              Travel isn't just about destinations — it's about discovery,
              connection, and unforgettable experiences. With a passion for
              exploration and years of industry expertise, we craft personalized
              journeys
            </p>
            <div className="discovery-details-wrapper">
              <img
                src="https://html.pixelfit.agency/tripex/assets/images/home-one/gallery/features-img1.jpg"
                alt="Father and son looking at a map"
                className="discovery-adventure-image"
              />
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
                  Start Your Tourn <span>+</span>
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
            {/* Left Side with Images */}
            <div className="testimonials-left">
              <div className="testimonials-image-collage">
                <img
                  src="https://html.pixelfit.agency/tripex/assets/images/home-one/testimonial/testimonial-img3.png"
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

            {/* Right Side with Slider */}
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
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="testimonials-avatar"
                        />
                        <div className="testimonials-author-info">
                          <h4>{testimonial.author}</h4>
                          <p>{testimonial.title}</p>
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
                We Make Travel Easy & Memorable
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
                src="https://html.pixelfit.agency/tripex/assets/images/home-one/gallery/choose-img1.png"
                alt="Airplane"
                className="why-choose-us-plane-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-by-section">
        <div className="trusted-by-container">
          <p className="trusted-by-title">Trusted By 200+ Global Brands</p>
          <div className="trusted-by-slider">
            <div className="trusted-by-slider-track">
              {extendedLogos.map((logo, index) => (
                <div className="trusted-by-slide" key={index}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
