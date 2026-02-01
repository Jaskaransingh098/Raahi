import React from "react";
import Banner from "../../components/Banner/Banner";
import {
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Plus,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

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

function AboutUs() {
  const aboutusSliderImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1507525428034-b723a996f329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const extendedImages = [...aboutusSliderImages, ...aboutusSliderImages];

  const adventureTypes = [
    { icon: <TentIcon />, name: "Tent Camping" },
    { icon: <KayakIcon />, name: "Adventure Of Kayaking" },
    { icon: <BungeeIcon />, name: "Bungee Jump" },
    { icon: <CanoeIcon />, name: "Adventure of Canoeing" },
    { icon: <ZiplineIcon />, name: "Adventure Of Zip Lines" },
    { icon: <BikeIcon />, name: "Mountain Biking" },
  ];

  const guides = [
    {
      id: 1,
      name: "Michael J. Hawthorne",
      title: "CEO & Senior Guide",
      image:
        "https://html.pixelfit.agency/tripex/assets/images/innerpage/team/team-img1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Timothy E. Redondo",
      title: "Senior Guide",
      image:
        "https://html.pixelfit.agency/tripex/assets/images/innerpage/team/team-img2.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "William W. McNichols",
      title: "Junior Guide",
      image:
        "https://html.pixelfit.agency/tripex/assets/images/innerpage/team/team-img3.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Samuel G. Lenahan",
      title: "Travel Guide",
      image:
        "https://html.pixelfit.agency/tripex/assets/images/innerpage/team/team-img4.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X inside card
    const y = e.clientY - rect.top; // mouse Y inside card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (card) => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

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

  return (
    <>
      <Banner title="About Us" breadcrumb="About Us" />

      <section className="about-page-section">
        <div className="about-page-container">
          {/* Left Column */}
          <div className="about-page-left-col">
            <p className="about-page-subtitle">Known About Us</p>
            <h2 className="about-page-title">
              Passion for Trekking, Purpose in Exploration
            </h2>
            <p className="about-page-description">
              A trekking and adventure company is your gateway to thrilling
              journeys and unforgettable outdoor experiences. From planning
              mountain trails and expeditions to arranging guided treks, safety
              gear, and travel insurance — every detail is carefully handled so
              you can explore with confidence and peace of mind.
            </p>
            <div className="about-page-features">
              <div className="about-page-feature-item">
                <div className="about-page-feature-icon">
                  <HeartHandshake size={28} />
                </div>
                <div>
                  <h4>Expert Trail Leaders</h4>
                  <p>
                    At the heart of every unforgettable trek is a leader who
                    knows the paths, shares local wisdom, and makes every step
                    memorable.
                  </p>
                </div>
              </div>
              <div className="about-page-feature-item">
                <div className="about-page-feature-icon">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4>Adventure with Safety</h4>
                  <p>
                    We go above and beyond to ensure your journey is thrilling
                    yet secure, so you can explore with complete peace of mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-page-footer">
              {/* <button className="about-page-cta-button">
                Learn More Us
                <span className="about-page-arrow-circle">
                  <ArrowRight size={16} />
                </span>
              </button> */}
              <div className="about-page-clients">
                <div className="about-page-client-avatars">
                  <img src="https://i.pravatar.cc/40?img=1" alt="Client 1" />
                  <img src="https://i.pravatar.cc/40?img=2" alt="Client 2" />
                  <img src="https://i.pravatar.cc/40?img=3" alt="Client 3" />
                  <img src="https://i.pravatar.cc/40?img=4" alt="Client 4" />
                </div>
                <p>3k Trusted Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-page-right-col">
            <div className="about-page-image-collage">
              <img
                src="/admin/aboutus2.png"
                alt="Collage of world landmarks with a suitcase"
                className="about-page-main-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus-slider-section">
        <div className="aboutus-slider-container">
          <div className="aboutus-slider-track">
            {extendedImages.map((image, index) => (
              <div className="aboutus-slider-slide" key={index}>
                <img src={image.src} alt={`Travel destination ${image.id}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aboutus-passion-section">
        <div className="aboutus-passion-container">
          {/* Left Column */}
          <div className="aboutus-passion-left-col">
            <div className="aboutus-passion-image-wrapper">
              <div className="aboutus-passion-bg-shape"></div>
              <img
                src="/admin/about us4.jpg"
                alt="Traveler reading a book next to a suitcase"
                className="aboutus-passion-main-image"
              />
            </div>
          </div>
          {/* Right Column */}
          <div className="aboutus-passion-right-col">
            <p className="aboutus-passion-subtitle">
              Discover Treks with Eco Explorers
            </p>
            <h2 className="aboutus-passion-title">
              Passion for Adventure, Purpose in Every Journey
            </h2>
            <p className="aboutus-passion-description">
              At Eco Explorers, we don’t just organize treks—we create
              unforgettable trails for explorers at heart. Whether it’s
              conquering rugged mountain paths, camping under starry skies, or
              discovering hidden cultures in remote valleys, our team ensures
              every step of your journey is meaningful and memorable.
            </p>
            <button className="aboutus-passion-cta-button">
              <Link
                to="/tours"
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "hover",
                }}
              >
                Book Now
              </Link>
              <span className="aboutus-passion-arrow-circle">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* <section className="trusted-by-section">
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
      </section> */}
    </>
  );
}

export default AboutUs;
