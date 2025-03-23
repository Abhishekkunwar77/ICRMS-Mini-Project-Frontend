// fir-management-frontend/src/pages/Auth.jsx (or AuthPage.jsx)
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleOpenRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <div>
      <Login />
      {/* Replace the button with a link */}
      {!showRegister && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleOpenRegister();
          }}
        >
          Signup
        </a>
      )}
      {showRegister && <Register onClose={handleCloseRegister} />}
    </div>
  );
};

export default Auth;
