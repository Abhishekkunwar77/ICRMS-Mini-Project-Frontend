// fir-management-frontend/src/components/FIRForm.jsx
import React, { useState } from "react";
import { api } from "../services/api";

const FIRForm = ({ onFIRSubmit }) => {
  const [firData, setFirData] = useState({
    title: "",
    description: "",
    location: "",
    incidentDate: "",
  });

  const handleChange = (e) => {
    setFirData({ ...firData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/firs", firData);
      onFIRSubmit(response.data);
      setFirData({
        title: "",
        description: "",
        location: "",
        incidentDate: "",
      });
    } catch (error) {
      console.error("Error submitting FIR:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={firData.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea
          name="description"
          value={firData.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Location:
        </label>
        <input
          type="text"
          name="location"
          value={firData.location}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Incident Date:
        </label>
        <input
          type="date"
          name="incidentDate"
          value={firData.incidentDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit FIR
      </button>
    </form>
  );
};

export default FIRForm;
