import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
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
import WhyUs from "./Pages/WhyUs/WhyUs";
import Faq from "./Pages/Faq/Faq";
import Rules from "./Pages/Rules/Rules";
import Cancellation from "./Pages/Cancellation/Cancellation";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/Privacy/Privacy";
import BookNow from "./Pages/BookNow/BookNow";
import ManageTourPage from "./Pages/Admin/components/Manage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Loader>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourgallery" element={<OurGallery />} />
          <Route path="/customise" element={<Customise />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/tours" element={<TourList />} />
          <Route path="/treklist" element={<TrekList />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/cancel" element={<Cancellation />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/book/:id" element={<BookNow />} />
          <Route path="/admin/tour/:id?" element={<ManageTourPage/>}/>
        </Routes>
      </Loader>

      <Footer />
    </Router>
  );
}

export default App;
