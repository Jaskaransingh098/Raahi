import React from "react";
import "./Rules.css";
import Banner from "../../components/Banner/Banner";
import { AlertTriangle, HeartPulse, UserX, Bug } from "lucide-react";
import { motion } from "framer-motion";

function Rules() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <div className="rules-regulation-page">
        <Banner title="Rules & Regulations" breadcrumb="Rules & Regulations" />
        <div className="rules-regulation-container">
          <motion.header
            className="rules-regulation-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rules-regulation-subtitle">Travel Guidelines</span>
            <h1>Rules & Regulations</h1>
            <p>
              Essential information to ensure your adventure with Eco Explorers is safe,
              enjoyable, and unforgettable. Please review these guidelines
              carefully before your journey begins.
            </p>
          </motion.header>

          <motion.main
            className="rules-regulation-main-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="rules-regulation-notes-card"
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <div className="rules-regulation-notes-header">
                <div className="rules-regulation-notes-icon">
                  <AlertTriangle size={24} />
                </div>
                <h2>Important Notes & Conditions</h2>
              </div>
              <ul className="rules-regulation-notes-list">
                <li>
                  Any extra cost (Transportation / Accommodation) arising due to
                  natural calamities like landslides, road blockage, political
                  disturbances or change in law will be extra.
                </li>
                <li>
                  Transfer & Sightseeing by vehicle on seat-in-coach basis.
                  Vehicle is provided based on itinerary and not at your
                  disposal.
                </li>
                <li>
                  Trip schedule is subject to change due to weather, roads, or
                  other unavoidable conditions. Please keep a buffer day or two.
                </li>
                <li>
                  Images shown are for illustration purposes only and may differ
                  from actual services.
                </li>
                <li>
                  Team Eco Explorers reserves the right to correct any printing or
                  pricing errors.
                </li>
                <li>
                  Airport transfers and coach tours are based on all guests
                  traveling together. No additional transfers will be provided
                  for different flights.
                </li>
                <li>
                  Additional charges apply for passengers who wish to extend
                  their stay.
                </li>
                <li>
                  In pandemic situations, the booking amount is non-refundable.
                  Rescheduling is available.
                </li>
                <li>
                  Changes in itinerary or hotel upgrades will incur additional
                  charges, which will be informed in advance.
                </li>
              </ul>
            </motion.div>
            <motion.aside
              className="rules-regulation-sidebar"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/trek-images/rules.svg"
                alt="Travel essentials like a backpack, map, and camera"
                className="rules-regulation-sidebar-image"
              />
            </motion.aside>
          </motion.main>

          <motion.footer
            className="rules-regulation-lower-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rules-regulation-policy-card">
              <div className="rules-regulation-policy-header">
                <div className="rules-regulation-policy-icon covid">
                  <Bug size={22} />
                </div>
                <h3>Covid Cancellation Policy</h3>
              </div>
              <p>
                <strong>Alternative arrangements:</strong> We arrange
                alternative treks/tours if cancelled due to lockdown or natural
                calamity.
              </p>
              <p>
                <strong>Government restrictions:</strong> Covid cancellation
                policy applies for government lockdowns.
              </p>
              <p>
                <strong>No alternatives:</strong> No refund if participant
                refuses alternative tour/trek.
              </p>
              <p>
                <strong>Pre-arranged services:</strong> Cannot be shifted to
                other dates.
              </p>
            </div>
            <div className="rules-regulation-policy-card">
              <div className="rules-regulation-policy-header">
                <div className="rules-regulation-policy-icon safety">
                  <HeartPulse size={22} />
                </div>
                <h3>Safety & Medical Care</h3>
              </div>
              <p>
                <strong>Medical expenses:</strong> All rescue, medication, and
                transport costs borne by traveller.
              </p>
              <p>
                <strong>Backup plan:</strong> One rescue opportunity per group
                for unwilling participants.
              </p>
              <p>
                <strong>Emergency termination:</strong> Second emergency
                terminates entire trip.
              </p>
              <p>
                <strong>Service scope:</strong> Limited to scheduled itinerary
                only.
              </p>
            </div>
            <div className="rules-regulation-policy-card">
              <div className="rules-regulation-policy-header">
                <div className="rules-regulation-policy-icon unused">
                  <UserX size={22} />
                </div>
                <h3>Unused Services</h3>
              </div>
              <p>
                <strong>No refunds:</strong> For missed or unused services due
                to client's fault.
              </p>
              <p>
                <strong>Service guarantee:</strong> We provide only scheduled
                itinerary services.
              </p>
              <p>
                <strong>Client responsibility:</strong> Termination due to
                negligence or breach.
              </p>
            </div>
          </motion.footer>
        </div>
      </div>
    </>
  );
}

export default Rules;
