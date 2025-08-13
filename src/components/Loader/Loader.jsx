import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Loader.css";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Give loader a minimum visible time (e.g., 1s)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad(); // already loaded
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback if "load" never fires
    const fallback = setTimeout(() => setLoading(false), 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
    };
  }, []);
  return (
    <>
      {loading && (
        <div className="loader">
          <DotLottieReact
            src="https://lottie.host/39529eed-ba72-4cf0-9e5d-697bc1b79aba/UP5se6LdCJ.lottie"
            loop
            autoplay
            style={{ width: 150, height: 150 }}
          />
        </div>
      )}
      <div className={`page-content ${loading ? "hidden" : ""}`}>
        {children}
      </div>
    </>
  );
}
