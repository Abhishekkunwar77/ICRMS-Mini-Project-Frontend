import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import PoliceCommissioner from "./PoliceCommissioner";
// Importing images
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";
import logo5 from "./images/logo5.png";
import logo6 from "./images/logo6.png";

// Importing service icons
import armsLicenseIcon from "../pages/images/armsLicenseIcon.png";
import cyberCrimeIcon from "../pages/images/cyberCrimeIcon.png";
import firIcon from "../pages/images/firIcon.png";
import meetDcIcon from "../pages/images/meetDcIcon.png";
import missingMobileIcon from "../pages/images/missingMobileIcon.png";
import missingPersonsIcon from "../pages/images/missingPersonsIcon.png";
import missingVehicleIcon from "../pages/images/missingVehicleIcon.png";
import policeClearanceIcon from "../pages/images/policeClearanceIcon.png";
import grievanceCellIcon from "../pages/images/grievanceCellIcon.png";
import trafficFinesIcon from "../pages/images/trafficFinesIcon.png";

const Home = () => {
  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500, // Faster transition
    slidesToShow: 4, // Show 4 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  // services for the users

  // Services for the users (Now using imported images)
  const services = [
    { name: "Arms License", icon: armsLicenseIcon, link: "#" },
    { name: "Cyber Crime & Bank Fraud", icon: cyberCrimeIcon, link: "#" },
    { name: "FIRs", icon: firIcon, link: "#" }, 
  
    { name: "Meet Your DC", icon: meetDcIcon, link: "#" },
    { name: "Missing Mobile Status", icon: missingMobileIcon, link: "#" },
    { name: "Missing Persons", icon: missingPersonsIcon, link: "#" },
    { name: "Missing Vehicle", icon: missingVehicleIcon, link: "#" },
    {
      name: "Police Clearance Certificate",
      icon: policeClearanceIcon,
      link: "#",
    },
    { name: "Public Grievance Cell", icon: grievanceCellIcon, link: "#" },
  
    { name: "Traffic Violation Fines", icon: trafficFinesIcon, link: "#" },
   
  ];

  // Array of website logos
  const websiteLogos = [
    {
      src: logo1,
      url: "https://passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew",
    },
    { src: logo2, url: "https://www.mstcindia.co.in/index.aspx" },
    { src: logo3, url: "https://cybercrime.gov.in/" },
    { src: logo4, url: "https://www.india.gov.in/" },
    {
      src: logo5,
      url: "https://wbregistration.gov.in/(S(ydxuvk4elsq2fgvg3onhpcmb))/index.aspx",
    },
    { src: logo6, url: "https://cid.wb.gov.in/" },
  ];

  return (
    <div className="home-container">
      <PoliceCommissioner />
     
   

      <div className="features">
        <h2>Key Features:</h2>
        <ul>
          <li>📝 File FIRs online with ease</li>
          <li>🔍 Track the status of your complaint in real-time</li>
          <li>📜 View all registered FIRs and case updates</li>
          <li>🔐 Secure and confidential complaint system</li>
          <li>📞 Emergency contact and helpline numbers available</li>
        </ul>
      </div>

      <div className="cta-section">
        <p>
          If you need to report an incident, click the button below to file an
          FIR.
        </p>
        <button
          className="file-fir-button"
          onClick={() => alert("Redirecting to FIR filing page...")}
        >
          File an FIR
        </button>
      </div>
      {/* service components*/}
      <div className="services-grid">
        {services.map((service, index) => (
          <a key={index} href={service.link} className="service-item">
            <img src={service.icon} alt={service.name} />{" "}
            {/* No need for getImagePath */}
            <p>{service.name}</p>
          </a>
        ))}
      </div>

      {/* Video Section */}
      <div className="video-section">
        <div className="videos">
          <div className="video">
            <h3>Virtual Tour of TN Police Museum</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CWdc04FInPo?si=ucQ0Kae2AScGFA7i"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Automatic Scrolling Carousel */}
      <h2 className="carousel-title">Important Websites</h2>
      <Slider {...settings} className="carousel-container">
        {websiteLogos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={`Website Logo ${index + 1}`} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
