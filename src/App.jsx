import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurGallery from "./Pages/OurGallery/OurGallery";
import Customise from "./Pages/Customise/Customise";

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
        </Routes>

        <Footer />
      </Router>
    </Loader>
  );
}

export default App;
