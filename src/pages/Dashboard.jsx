// fir-management-frontend/src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import FIRForm from "../components/FIRForm";
import FIRList from "../components/FIRList";
import { api } from "../services/api";

const Dashboard = () => {
  const [firs, setFirs] = useState([]);

  useEffect(() => {
    const fetchFirs = async () => {
      try {
        const response = await api.get("/firs");
        setFirs(response.data);
      } catch (error) {
        console.error("Error fetching FIRs:", error);
      }
    };
    fetchFirs();
  }, []);

  const handleFIRSubmit = (newFIR) => {
    setFirs([...firs, newFIR]);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <FIRForm onFIRSubmit={handleFIRSubmit} />
      <FIRList firs={firs} />
    </div>
  );
};

export default Dashboard;
