import React, { useState, useEffect } from "react";
import "./PoliceCommissioner.css";
import CoimbatorePolice from "../pages/images/CoimbatorePolice.png";
import p1 from "../pages/images/p1.png";
import p2 from "../pages/images/p2.png";
import p3 from "../pages/images/p3.png";
import p4 from "../pages/images/p4.png";
import p5 from "../pages/images/p5.png";
import p6 from "../pages/images/p6.png";
import p7 from "../pages/images/p7.png";
import p8 from "../pages/images/p8.png";

const PoliceCommissioner = () => {
  const [index, setIndex] = useState(0);
  const images = [p1, p2, p3, p4, p5, p6, p7, p8];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // If we're at the last image, reset to 0
        if (prevIndex === images.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="commissioner-section">
      {/* Left Section */}
      <div className="left-section">
        <div className="left-content">
          <img
            src={CoimbatorePolice}
            alt="Police Station"
            className="station-img"
          />
          <p>
            ​Thiru A. Saravana Sundar, IPS, serves as the current Commissioner
            of Police for Coimbatore City. The Coimbatore City Police are
            responsible for law enforcement and investigative duties within the
            jurisdiction of Coimbatore City, ensuring public safety and
            maintaining order. ​
          </p>
        </div>
      </div>

      {/* Right Section - Auto-Sliding Images */}
      <div className="right-section">
        <div className="slider-container">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: index === 0 ? "none" : "transform 0.5s ease-in-out",
            }}
          >
            {images.map((img, i) => (
              <img key={i} src={img} alt="Event" className="slider-img" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceCommissioner;
