import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css"
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurGallery from "./Pages/OurGallery/OurGallery";
import Customise from "./Pages/Customise/Customise";
import AdminLogin from "./Pages/Admin/pages/AdminLogin";
import AdminDashboard from "./Pages/Admin/pages/AdminDashboard";
import TourList from "./Pages/Admin/components/TourList";
import TrekList from "./Pages/Admin/components/TrekList";

function App() {
  return (
    <Loader>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourgallery" element={<OurGallery />} />
          <Route path="/customise" element={<Customise />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/tourlist" element={<TourList />} />
          <Route path="/treklist" element={<TrekList />} />
        </Routes>

        <Footer />
      </Router>
    </Loader>
  );
}

export default App;
