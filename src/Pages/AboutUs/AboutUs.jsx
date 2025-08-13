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
              Passion for Adventure, Purpose in Travel
            </h2>
            <p className="about-page-description">
              A travel agency is your gateway to unforgettable adventures and
              stress free vacations knowledge access. From booking flights and
              the to arranging guided tours travel insurance detail carefully
              handled.
            </p>
            <div className="about-page-features">
              <div className="about-page-feature-item">
                <div className="about-page-feature-icon">
                  <HeartHandshake size={28} />
                </div>
                <div>
                  <h4>Friendly Guide</h4>
                  <p>
                    At the heart of every great journey is a great best in the
                    world.
                  </p>
                </div>
              </div>
              <div className="about-page-feature-item">
                <div className="about-page-feature-icon">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4>Safety Travel</h4>
                  <p>
                    We go above and beyond ensure that your journey not
                    exciting.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-page-footer">
              <button className="about-page-cta-button">
                Learn More Us
                <span className="about-page-arrow-circle">
                  <ArrowRight size={16} />
                </span>
              </button>
              <div className="about-page-clients">
                <div className="about-page-client-avatars">
                  <img src="https://i.pravatar.cc/40?img=1" alt="Client 1" />
                  <img src="https://i.pravatar.cc/40?img=2" alt="Client 2" />
                  <img src="https://i.pravatar.cc/40?img=3" alt="Client 3" />
                  <img src="https://i.pravatar.cc/40?img=4" alt="Client 4" />
                </div>
                <p>10m+ Trusted Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-page-right-col">
            <div className="about-page-image-collage">
              <img
                src="https://html.pixelfit.agency/tripex/assets/images/innerpage/about/about-img1.jpg"
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

      <section className="home-popular-section">
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
        </div>
      </section>

      <section className="travel-guide-section">
        <div className="travel-guide-container">
          <div className="travel-guide-header">
            <div>
              <p className="travel-guide-subtitle">Meet Our Tour Guide</p>
              <h2 className="travel-guide-title">Experience Travel Guide</h2>
            </div>
          </div>
          <div className="travel-guide-grid">
            {guides.map((guide) => (
              <div className="travel-guide-card" key={guide.id}>
                <div className="travel-guide-image-wrapper">
                  <img src={guide.image} alt={guide.name} />
                </div>
                <div className="travel-guide-info">
                  <h3>{guide.name}</h3>
                  <p>{guide.title}</p>
                  <div className="travel-guide-social-wrapper">
                    <div className="travel-guide-plus-icon">
                      <Plus size={20} />
                    </div>
                    <div className="travel-guide-social-icons">
                      <a href={guide.social.facebook} aria-label="Facebook">
                        <Facebook size={16} />
                      </a>
                      <a href={guide.social.twitter} aria-label="Twitter">
                        <Twitter size={16} />
                      </a>
                      <a href={guide.social.linkedin} aria-label="LinkedIn">
                        <Linkedin size={16} />
                      </a>
                      <a href={guide.social.instagram} aria-label="Instagram">
                        <Instagram size={16} />
                      </a>
                    </div>
                  </div>
                </div>
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
                src="https://html.pixelfit.agency/tripex/assets/images/innerpage/features/feature-img1.png"
                alt="Traveler reading a book next to a suitcase"
                className="aboutus-passion-main-image"
              />
            </div>
          </div>
          {/* Right Column */}
          <div className="aboutus-passion-right-col">
            <p className="aboutus-passion-subtitle">Discover World Tours</p>
            <h2 className="aboutus-passion-title">
              Passion for Adventure Purpose in Travel
            </h2>
            <p className="aboutus-passion-description">
              We don't just plan trips—we craft unforgettable experiences for
              the bold and curious. Whether you're chasing mountain peaks,
              diving into crystal-clear waters or exploring remote cultures, our
              expert team is here to guide
            </p>
            <button className="aboutus-passion-cta-button">
              Start Booking
              <span className="aboutus-passion-arrow-circle">
                <ArrowRight size={16} />
              </span>
            </button>
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

export default AboutUs;
