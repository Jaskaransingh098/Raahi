import React from "react";
import Banner from "../../components/Banner/Banner";
import "./WhyUs.css";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Mountain,
  Bike,
  BookOpen,
  Compass,
  HeartPulse,
} from "lucide-react";

function WhyUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <div className="why-us-page">
        <Banner title="Why Us" breadcrumb="Why Us" />
        <section className="why-us-hero">
          <video
            className="why-us-hero-video"
            src="/trek-images/why-us2.mp4"
            autoPlay
            loop
            muted
          />
          <motion.div
            className="why-us-hero-content"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Why Travel With Us</h1>
            <p>Your Adventure, Our Passion.</p>
          </motion.div>
        </section>

        {/* --- Introduction Section --- */}
        <motion.section
          className="why-us-intro-section"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="why-us-intro-image">
            <img
              src="/trek-images/hikers-mountains.jpg"
              alt="Group of friends hiking on a mountain trail"
            />
          </div>
          <div className="why-us-intro-text">
            <h2>
              Eco Explorers is a team of passionate travel lovers who love to explore
              nature and its beauty.
            </h2>
            <p>
              With the aim of providing a safe, economic, and fun-filled
              travelling experience, Eco Explorers was formed. We strongly believe
              everyone should travel, explore the outdoors, and find peace
              within.
            </p>
            <p>
              Committed to excellent service, we ensure a happy, comfortable,
              and memorable experience with us from the moment you connect with
              our team to the moment you return home with cherished memories.
            </p>
          </div>
        </motion.section>

        {/* --- Philosophy Section --- */}
        <motion.section
          className="why-us-philosophy-section"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="why-us-philosophy-container">
            <p className="why-us-subtitle">Our Philosophy</p>
            <h2>Safe Travel, Best Travel.</h2>
            <div className="why-us-philosophy-grid">
              <div className="why-us-philosophy-card">
                <div className="why-us-philosophy-icon">
                  <ShieldCheck size={32} />
                </div>
                <h3>Safety First</h3>
                <p>
                  Your well-being is our top priority. Our experienced guides
                  and meticulous planning ensure you can explore with
                  confidence.
                </p>
              </div>
              <div className="why-us-philosophy-card">
                <div className="why-us-philosophy-icon">
                  <HeartHandshake size={32} />
                </div>
                <h3>Passionate Experts</h3>
                <p>
                  We are a group of professional, well-trained, and experienced
                  outdoor experts offering customized treks and tours.
                </p>
              </div>
              <div className="why-us-philosophy-card">
                <div className="why-us-philosophy-icon">
                  <Mountain size={32} />
                </div>
                <h3>Authentic Adventures</h3>
                <p>
                  We guide safe and thrilling adventures based on our own
                  experiences as hikers and mountain bikers across India.
                </p>
              </div>
              <motion.div
                className="why-us-philosophy-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="why-us-philosophy-icon">
                  <Bike size={32} />
                </div>
                <h3>Customized Journeys</h3>
                <p>
                  From solo treks to family tours, we craft personalized
                  itineraries that match your travel style and dreams.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* --- Our Guides Section (Replaced Stats) --- */}
        <motion.section
          className="why-us-guides-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="why-us-guides-container">
            <p className="why-us-subtitle">Our Expertise</p>
            <h2>Led by Knowledgeable & Experienced Guides</h2>
            <p>
              Our trek leaders are the heart of our journeys. They are not just
              guides, but seasoned explorers, certified professionals, and
              passionate storytellers who ensure your adventure is both safe and
              deeply enriching.
            </p>
            <div className="why-us-guides-grid">
              <div className="why-us-guide-feature">
                <div className="why-us-guide-icon">
                  <Compass size={32} />
                </div>
                <h3>Expert Local Knowledge</h3>
                <p>
                  Our guides possess intimate knowledge of the local terrain,
                  culture, and hidden gems, offering you an authentic and
                  immersive experience beyond the typical tourist trails.
                </p>
              </div>
              <div className="why-us-guide-feature">
                <div className="why-us-guide-icon">
                  <HeartPulse size={32} />
                </div>
                <h3>Wilderness First-Aid Certified</h3>
                <p>
                  Safety is paramount. All our trek leaders are certified in
                  wilderness first-aid and emergency response, prepared to
                  handle any situation with calm professionalism.
                </p>
              </div>
              <div className="why-us-guide-feature">
                <div className="why-us-guide-icon">
                  <BookOpen size={32} />
                </div>
                <h3>Passionate Storytellers</h3>
                <p>
                  Our guides do more than lead the way; they bring the journey
                  to life with fascinating stories about the local history,
                  folklore, and ecosystem, making your trip truly unforgettable.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

export default WhyUs;
