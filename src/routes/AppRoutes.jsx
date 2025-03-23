import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import FIRDetail from "../components/FIRDetail";
import { AuthProvider } from "../context/AuthContext";
import Gallery from "../components/Gallery";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../components/TermsOfService";
import WhosWho from "../components/Whoswho";
import History from "../components/History";
import Map from "../components/map";
import TrafficSignal from "../components/TrafficSignal";
import Helpline from "../components/Helpline";
import Notice from "../components/Notice";
import AdministrativeFlow from "../components/AdministrativeFlow";
import ContactDeveloper from "../components/ContactDeveloper";
const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfService />} />
        <Route path="/history" element={<History />} />
        <Route path="/who-is-who" element={<WhosWho />} />
        <Route path="/map" element={<Map />} />
        <Route path="/traffic-signals" element={<TrafficSignal />} />
        <Route path="/helpline" element={<Helpline/>}/>
        <Route path="/notice-or-notifications" element={<Notice/>}/>
        <Route path="/administrative-flow" element={<AdministrativeFlow/>}/>
        <Route path="/contact-developer" element={<ContactDeveloper/>}/>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fir/:id"
          element={
            <ProtectedRoute>
              <FIRDetail />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
