// fir-management-frontend/src/components/FIRList.jsx
import React from "react";
import { Link } from "react-router-dom";

const FIRList = ({ firs }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4">FIR List</h2>
      {firs.length > 0 ? (
        <ul>
          {firs.map((fir) => (
            <li key={fir.id} className="border p-2 mb-2">
              <Link to={`/fir/${fir.id}`}>{fir.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No FIRs found.</p>
      )}
    </div>
  );
};

export default FIRList;
