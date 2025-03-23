import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [trafficDropdown, setTrafficDropdown] = useState(false);
  const [rtiDropdown, setRtiDropdown] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          FIR Management
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          {/* About Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <button className="navbar-link dropdown-toggle">
              About <span className="dropdown-icon">&#9662;</span>
            </button>
            {aboutDropdown && (
              <div className="dropdown-content">
                <Link to="/history" className="dropdown-item">
                  History
                </Link>
                <Link to="/who-is-who" className="dropdown-item">
                  Who's Who
                </Link>
                <Link to="/map" className="dropdown-item">
                  Map of the District
                </Link>
                <Link to="/notice-or-notifications" className="dropdown-item">
                  Notice / Notification
                </Link>
                <Link to="/administrative-flow" className="dropdown-item">
                  Administrative Flow
                </Link>
              </div>
            )}
          </div>

          {/* Traffic Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setTrafficDropdown(true)}
            onMouseLeave={() => setTrafficDropdown(false)}
          >
            <button className="navbar-link dropdown-toggle">
              Traffic <span className="dropdown-icon">&#9662;</span>
            </button>
            {trafficDropdown && (
              <div className="dropdown-content">
                <Link
                  to="/TrafficGuard.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  Traffic Guard
                </Link>

                <Link
                  to="/TrafficRules.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  Traffic Rules
                </Link>

                <Link to="/traffic-signals" className="dropdown-item">
                  Traffic Signals
                </Link>
              </div>
            )}
          </div>

          {/* RTI Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setRtiDropdown(true)}
            onMouseLeave={() => setRtiDropdown(false)}
          >
            <button className="navbar-link dropdown-toggle">
              RTI <span className="dropdown-icon">&#9662;</span>
            </button>
            {rtiDropdown && (
              <div className="dropdown-content">
                <Link
                  to="/RTI_Act_2005.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  RTI pdf Download
                </Link>

               
                <Link to="/helpline" className="dropdown-item">
                  Helpline
                </Link>
              </div>
            )}
          </div>

          <Link to="/gallery" className="navbar-link">
            Gallery
          </Link>

          {user ? (
            <>
              <Link to="/dashboard" className="navbar-link">
                Dashboard
              </Link>
              <Link to="/profile" className="navbar-link">
                Profile
              </Link>
              <button onClick={handleLogout} className="navbar-button">
                Logout
              </button>
            </>
          ) : (
            <div
              className="dropdown"
              onMouseEnter={() => setLoginDropdown(true)}
              onMouseLeave={() => setLoginDropdown(false)}
            >
              <button className="navbar-link dropdown-toggle">
                Login <span className="dropdown-icon">&#9662;</span>
              </button>
              {loginDropdown && (
                <div className="dropdown-content">
                  <Link to="/login-citizen" className="dropdown-item">
                    Login as Citizen
                  </Link>
                  <Link to="/login-police" className="dropdown-item">
                    Login as Police
                  </Link>
                </div>
              )}
            </div>
          )}

          {!user && (
            <Link to="/register" className="navbar-link">
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
