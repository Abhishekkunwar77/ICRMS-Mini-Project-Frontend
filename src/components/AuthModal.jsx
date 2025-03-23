import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./AuthModal.css";

const AuthModal = ({ onClose }) => {
  const navigate = useNavigate(); // Hook for navigation

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const toggleAuthMode = () => {
    setIsSignup((prev) => !prev);
    setFormData({ username: "", email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignup ? "Signing Up" : "Logging In", formData);
  };

  const handleClose = () => {

    navigate("/home"); // Navigate to Home
  };

  return (
    <div className="auth-overlay" onClick={handleClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* Prevent modal from closing when clicking inside */}

        {/* Close Button (Navigates to Home) */}
        <span className="close-btn" onClick={handleClose}>
          &times;
        </span>

        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {!isSignup && (
            <div className="checkbox-container">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          )}

          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <p>
          {isSignup ? "Already have an account? " : "Create a new account? "}
          <span className="signup-link" onClick={toggleAuthMode}>
            Click here
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
