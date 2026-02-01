import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./OurGallery.css";

import Banner from "../../components/Banner/Banner";

function OurGallery() {
  const location = useLocation();

  const galleryImages = [
    {
      id: 1,
      src: "/Himalayas content/VID-20250916-WA0072.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 2,
      src: "/Himalayas content/VID-20250916-WA0073.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 3,
      src: "/Himalayas content/VID-20250916-WA0074.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 4,
      src: "/Himalayas content/VID-20250916-WA0075.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 5,
      src: "/Himalayas content/VID-20250916-WA0077.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 6,
      src: "/Himalayas content/IMG-20250916-WA0015.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 7,
      src: "/Himalayas content/IMG-20250916-WA0017.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 8,
      src: "/Himalayas content/IMG-20250916-WA0019.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 9,
      src: "/Himalayas content/IMG-20250916-WA0030.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 10,
      src: "/Himalayas content/IMG-20250916-WA0032.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 11,
      src: "/Himalayas content/IMG-20250916-WA0034.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 12,
      src: "/Himalayas content/IMG-20250916-WA0036.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 13,
      src: "/Himalayas content/IMG-20250916-WA0038.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 14,
      src: "/Himalayas content/IMG-20250916-WA0046.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 15,
      src: "/Himalayas content/IMG-20250916-WA0048.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 16,
      src: "/Himalayas content/IMG-20250916-WA0050.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 17,
      src: "/Himalayas content/IMG-20250916-WA0052.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 18,
      src: "/Himalayas content/IMG-20250916-WA0053.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 19,
      src: "/Himalayas content/IMG-20250916-WA0054.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 20,
      src: "/Himalayas content/IMG-20250916-WA0055.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 21,
      src: "/Himalayas content/IMG-20250916-WA0060.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 22,
      src: "/Himalayas content/IMG-20250916-WA0061.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 23,
      src: "/Himalayas content/IMG-20250916-WA0063.jpg",
      category: "Himalayan Treks",
    },
    {
      id: 24,
      src: "/Himalayas content/VID-20250916-WA0065.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 25,
      src: "/Himalayas content/VID-20250916-WA0066.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 26,
      src: "/Himalayas content/VID-20250916-WA0067.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 27,
      src: "/Himalayas content/VID-20250916-WA0068.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 28,
      src: "/Himalayas content/VID-20250916-WA0069.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 29,
      src: "/Himalayas content/VID-20250916-WA0070.mp4",
      category: "Himalayan Treks",
    },
    {
      id: 30,
      src: "/Himalayas content/VID-20250916-WA0071.mp4",
      category: "Himalayan Treks",
    },
  ];

  

  const countryToGalleryCategory = {
    // Shayadri: "Sahyadri Treks",
    Himalayan: "Himalayan Treks",
    "Bikes Special": "Biker Special",
    Customized: "Customized",
    // Ladakh: "Himalaya Calling",
  };

  const filterCategories = [
    "Show All",
    // "Sahyadri Treks",
    // "Domestic Tours",
    "Biker Special",
    // "Devotional Tours",
    // "Family And Kids Special",
    "Customized",
    "Himalayan Treks",
  ];

  const searchParams = new URLSearchParams(location.search);
  const categoryFromURLRaw = searchParams.get("category") || "Show All";
  const categoryFromURL =
    countryToGalleryCategory[categoryFromURLRaw] || categoryFromURLRaw;

  const [activeFilter, setActiveFilter] = useState(categoryFromURL);

  const filteredImages = useMemo(() => {
    if (activeFilter === "Show All") {
      return galleryImages;
    }
    return galleryImages.filter((image) => image.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Banner title="Our Gallery" breadcrumb="Our Gallery" />

      <section className="journey-gallery-section">
        <div className="journey-gallery-container">
          <div className="journey-gallery-header">
            <p className="journey-gallery-subtitle">Explore Gallery</p>
            <h2 className="journey-gallery-title">
              Our World, Your Next Destination Journey Highlights
            </h2>
          </div>
          <div className="journey-gallery-filters">
            {filterCategories.map((category) => (
              <button
                key={category}
                className={`journey-gallery-filter-btn ${
                  activeFilter === category ? "active" : ""
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="journey-gallery-grid">
            {filteredImages.map((image, index) => (
              // <div
              //   className={`journey-gallery-item item-${index + 1}`}
              //   key={image.id}
              // >
              //   <img src={image.src} alt={`Gallery image ${image.id}`} />
              //   <div className="journey-gallery-overlay">
              //     <a href="/contact" className="journey-gallery-add-btn">
              //       Add Your Image
              //       <ArrowRight size={20} />
              //     </a>
              //   </div>
              // </div>
              <div
                className={`journey-gallery-item item-${index + 1}`}
                key={image.id}
              >
                {image.src.endsWith(".mp4") ? (
                  <video
                    src={image.src}
                    nocontrols
                    autoPlay
                    muted
                    loop
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={image.src}
                    alt={`Gallery image ${image.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div className="journey-gallery-overlay">
                  <a href="/contact" className="journey-gallery-add-btn">
                    Add Your Image
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurGallery;
