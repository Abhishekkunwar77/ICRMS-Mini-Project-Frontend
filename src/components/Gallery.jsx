import React, { useState } from "react";
import "./Gallery.css";
import img1 from "./assets/Ishayogi.png";
import img2 from "./assets/Kovai.png";
import img3 from "./assets/monkeywaterfall.png";
import img4 from "./assets/suryakunda.png";
import img5 from "./assets/valparai.png";
import img6 from "./assets/parambikulam.png";
import img7 from "./assets/wander.png";
import img8 from "./assets/coimbatorePolice.png";
import img9 from "./assets/jharna.png";
import img10 from "./assets/p1.png";
import img11 from "./assets/p2.png";
import img12 from "./assets/p3.png";
import img13 from "./assets/p4.png";
import img14 from "./assets/road.png";
import img15 from "./assets/temple23.png";
import { FaDownload, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const downloadImage = (src) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const showNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="gallery-img"
              onClick={() => setSelectedIndex(index)}
            />
            <button className="download-btn" onClick={() => downloadImage(src)}>
              <FaDownload /> Download
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Image Popup */}
      {selectedIndex !== null && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="prev-btn"
              onClick={showPrevImage}
              disabled={selectedIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <img
              src={images[selectedIndex]}
              alt="Enlarged view"
              className="modal-img"
            />
            <button
              className="next-btn"
              onClick={showNextImage}
              disabled={selectedIndex === images.length - 1}
            >
              <FaArrowRight />
            </button>
            <button
              className="close-btn"
              onClick={() => setSelectedIndex(null)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
