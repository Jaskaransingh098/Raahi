import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useLocation } from "react-router-dom";
import "./Loader.css";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad(); // already loaded
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback
    const fallback = setTimeout(() => setLoading(false), 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    // Show loader on every route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // adjust duration
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="loader-circle">
            <DotLottieReact
              src="https://lottie.host/7e0bcff6-a470-48a5-921f-0db3134eff89/Z9Bt5ckOTY.lottie"
              loop
              autoplay
              className="lottie"
            />
          </div>
        </div>
      )}

      <div className={`page-content ${loading ? "hidden" : ""}`}>
        {children}
      </div>
    </>
  );
}
