import React, { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import "./OurGallery.css";

import Banner from "../../components/Banner/Banner";

function OurGallery() {
  // --- Image Data with Categories --- //
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1440342359743-13c479a4d4b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Himalaya Calling",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1508921340878-ba53e1f416ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Sahyadri Treks",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1549622144-8c1b49873449?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Himalaya Calling",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Domestic Tours",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Family And Kids Special",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Customize Your Travel Plan",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1531424834796-3a84aba2b10e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Devotional Tours",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1534529489-311b93149759?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Biker Special",
    },
  ];

  const filterCategories = [
    "Show All",
    "Sahyadri Treks",
    "Domestic Tours",
    "Biker Special",
    "Devotional Tours",
    "Family And Kids Special",
    "Customize Your Travel Plan",
    "Himalaya Calling",
  ];

  const [activeFilter, setActiveFilter] = useState("Show All");

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
              <div
                className={`journey-gallery-item item-${index + 1}`}
                key={image.id}
              >
                <img src={image.src} alt={`Gallery image ${image.id}`} />
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
