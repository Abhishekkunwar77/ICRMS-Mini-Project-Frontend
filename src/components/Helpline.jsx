import React from "react";
import "./Helpline.css";

const helplineData = [
  { id: 1, service: "Police Control Room", number: "100" },
  { id: 2, service: "Fire & Rescue Services", number: "101" },
  { id: 3, service: "Ambulance", number: "102" },
  { id: 4, service: "Hospital on Wheels", number: "104" },
  { id: 5, service: "Accidents", number: "108" },
  { id: 6, service: "Railway General Enquiry", number: "131" },
  { id: 7, service: "BSNL Telephone Complaints", number: "197" },
  { id: 8, service: "Emergency Relief on Highways", number: "1033" },
  { id: 9, service: "Traffic Help Line", number: "1073" },
  { id: 10, service: "Disaster Help Line", number: "1077" },
  { id: 11, service: "Women Crisis Response", number: "1091" },
  { id: 12, service: "Earthquake Helpline Service", number: "1092" },
  { id: 13, service: "Coastal Security Control", number: "1093" },
  { id: 14, service: "Natural Disaster Control Room", number: "1096" },
  { id: 15, service: "AIDS Helpline Service", number: "1097" },
  { id: 16, service: "Child Help line", number: "1098" },
  { id: 17, service: "Catastrophe & Trauma Service", number: "1099" },
  { id: 18, service: "Senior Citizen Help line", number: "1253" },
  { id: 19, service: "Railway Reservation Enquiry", number: "1345" },
  { id: 20, service: "Kisan Call Center", number: "1551" },
  { id: 21, service: "National Directory Enquiry (BSNL)", number: "1583" },
  { id: 22, service: "Maritime Search (Coast Guard)", number: "1718" },
  { id: 23, service: "Blood Bank Information Service", number: "1910" },
  { id: 24, service: "Dial a Doctor", number: "1911" },
  { id: 25, service: "Eye Bank Information Service", number: "1919" },
  { id: 26, service: "Electricity Complaints", number: "155333" },
  { id: 27, service: "CM Health Insurance", number: "18004253993" },
  { id: 28, service: "Anti Ragging Helpline", number: "18001805522" },
  { id: 29, service: "Suicide Prevention Helpline", number: "85265 65656" },
  { id: 30, service: "Ministry of Overseas Affairs", number: "1800113099" },
  { id: 31, service: "National Minority Commission", number: "1800110088" },
  {
    id: 32,
    service: "National Rural Employ Guarantee Act",
    number: "1800110707",
  },
  {
    id: 33,
    service: "Cyber Crime Complaint Reporting Helpline No",
    number: "1930",
  },
];

const Helpline = () => {
  return (
    <div className="helpline-container">
      <h2>🚨 Helpline Numbers 🚨</h2>
      <table className="helpline-table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Service</th>
            <th>Toll-Free / Helpline Number</th>
          </tr>
        </thead>
        <tbody>
          {helplineData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.service}</td>
              <td>{item.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Helpline;
