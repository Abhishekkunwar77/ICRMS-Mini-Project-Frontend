import React, { useState } from "react";
import {
  FaPhone,
  FaCarCrash,
  FaFemale,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaShieldAlt,
  FaMapPin,
  FaChalkboardTeacher,
  FaChild,
  FaAmbulance,
  FaCloudShowersHeavy,
  FaBan,
  FaLifeRing,
} from "react-icons/fa";
import "./Footer.css";
import TermsOfService from "./TermsOfService"; // Import TermsOfService
import PrivacyPolicy from "../pages/PrivacyPolicy"; // Import PrivacyPolicy
import { Link } from "react-router-dom";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleOpenTerms = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowTerms(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };

  const handleOpenPrivacy = (e) => {
    e.preventDefault();
    setShowPrivacy(true);
  };

  const handleClosePrivacy = () => {
    setShowPrivacy(false);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info Section */}
        <div className="contact-info-wrapper">
          <div className="contact-info contact-info-left">
            <p>
              <FaPhone /> Emergency Call Dial{" "}
              <span className="highlight">100</span>
            </p>
            <p>
              <FaCarCrash /> Traffic Control Room:{" "}
              <span className="highlight">1073</span>
            </p>
            <p>
              <FaFemale /> Women's Helpline :{" "}
              <span className="highlight">1097</span>
            </p>
            <p>
              <FaChild /> Child Helpline :{" "}
              <span className="highlight">1098</span>
            </p>
            <p>
              <FaBan /> Anti Ragging Helpline:{" "}
              <span className="highlight">18001805522</span>
            </p>
            <p>
              <FaLifeRing /> Suicide prevention Helpline:{" "}
              <span className="highlight">85265 65656</span>
            </p>
          </div>

          <div className="contact-info contact-info-right">
            <p>
              <FaShieldAlt /> Cyber Helpline (24 x 7):{" "}
              <span className="highlight">1930</span>
            </p>
            <p>
              <FaMapPin /> Address :{" "}
              <span className="highlight">Coimbatore, Tamilnadu</span>
            </p>
            <p>
              <FaEnvelope /> Email:{" "}
              <span className="highlight">collrcbe@nic.in</span>
            </p>
            <p>
              <FaChalkboardTeacher /> Student Helpline :{" "}
              <span className="highlight">14417</span>
            </p>
            <p>
              <FaAmbulance /> Ambulance : <span className="highlight">102</span>
            </p>
            <p>
              <FaCloudShowersHeavy /> Natural Disaster Helpline :{" "}
              <span className="highlight">1096</span>
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-icons">
          <a
            href="https://x.com/tnpoliceoffl"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/tnpoliceofficial/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/coimbatore_city_police/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@TNPOLICEOFFICIAL"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            title="Youtube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.google.com/maps/place/Coimbatore+City+Police+Commissioner+Office/@11.00057,76.6630656,11z/data=!4m10!1m2!2m1!1scoimbatore+police+station!3m6!1s0x3ba859a65b775b0b:0xa592e36755e75de!8m2!3d11.00057!4d76.9679362!15sChljb2ltYmF0b3JlIHBvbGljZSBzdGF0aW9ukgEMc3RhdGVfcG9saWNl4AEA!16s%2Fg%2F1tp8yh0f?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            title="Nearest Police Station"
          >
            <FaMapMarkerAlt />
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>
            © 2025 -{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://coimbatore.nic.in/public-utility/commissioner-of-police-coimbatore-city/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b className="cmbplc"> Coimbatore Police</b>
            </a>
            . All Rights Reserved | Designed & Developed by <b><Link className="contact-developer" to="/contact-developer">Parmatma</Link></b>
          </p>
          <a
            className="tos"
            href="/terms-of-services"
            onClick={handleOpenTerms}
          >
            Terms of Service
          </a>
          &nbsp; | &nbsp;
          <Link className="pp" to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
      {showTerms && <TermsOfService onClose={handleCloseTerms} />}
      {showPrivacy && <PrivacyPolicy onClose={handleClosePrivacy} />}
    </footer>
  );
};

export default Footer;
