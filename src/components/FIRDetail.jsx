// fir-management-frontend/src/components/FIRDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

const FIRDetail = () => {
  const { id } = useParams();
  const [fir, setFir] = useState(null);

  useEffect(() => {
    const fetchFIR = async () => {
      try {
        const response = await api.get(`/firs/${id}`);
        setFir(response.data);
      } catch (error) {
        console.error("Error fetching FIR:", error);
      }
    };
    fetchFIR();
  }, [id]);

  if (!fir) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4">{fir.title}</h2>
      <p>
        <strong>Description:</strong> {fir.description}
      </p>
      <p>
        <strong>Location:</strong> {fir.location}
      </p>
      <p>
        <strong>Incident Date:</strong> {fir.incidentDate}
      </p>
    </div>
  );
};

export default FIRDetail;
