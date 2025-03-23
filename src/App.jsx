import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./index.css"; // Import global styles
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import Footer from "./components/Footer";

const App = () => {
  // Define user state and authentication functions
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer/>
      </Router>
    
    </AuthContext.Provider>
  );
};

export default App;
