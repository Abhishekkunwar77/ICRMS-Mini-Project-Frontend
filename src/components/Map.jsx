import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-container">
      <h1>Map of the District</h1>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1003259.7828138873!2d76.31793841981735!3d10.812572270696963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x4055e8c364f97b97!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1742628499101!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
