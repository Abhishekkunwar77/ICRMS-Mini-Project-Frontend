import React from "react";
import "./Notice.css";
import notice from "../components/assets/notice.pdf"
import notice1 from "../components/assets/notice1.pdf"
const notices = [
  {
    id: 1,
    title:
      "Employment of 5 (five) numbers of Senior Legal Consultants under Bidhannagar Police Commissionerate",
    file: notice,
    date: "14 Nov, 2024",
  },
  {
    id: 2,
    title:
      "Publication for employment of 5 (five) numbers of Senior Legal Consultants under Bidhannagar Police Commissionerate",
    file: notice1,
    date: "07 Nov, 2024",
  },
  {
    id: 3,
    title: "Honourable Supreme Court Order regarding Diwali",
    file: notice,
    date: "03 Nov, 2018",
  },
  {
    id: 4,
    title: "New Guidelines for FIR Registration Process",
    file: notice1,
    date: "20 Mar, 2025",
  },
  {
    id: 5,
    title: "Amendment in Criminal Procedure Code - 2025",
    file: notice1,
    date: "15 Mar, 2025",
  },
  {
    id: 6,
    title: "Mandatory E-Filing of FIRs in Urban Areas",
    file: notice,
    date: "10 Mar, 2025",
  },
  {
    id: 7,
    title: "Launch of FIR Mobile App for Citizens",
    file: notice1,
    date: "05 Mar, 2025",
  },
  {
    id: 8,
    title: "Special Training for Police Officers on FIR Handling",
    file: notice1,
    date: "28 Feb, 2025",
  },
  {
    id: 9,
    title: "Strict Action Against False FIRs - New Rules",
    file: notice,
    date: "20 Feb, 2025",
  },
  {
    id: 10,
    title: "FIR Status Tracking System - User Guide",
    file: notice1,
    date: "10 Feb, 2025",
  },
];

const Notice = () => {
  return (
    <div className="notice-container">
      <h2>📢 Orders & Notifications</h2>
      <table className="notice-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Order / Notification</th>
            <th>Date Updated</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => (
            <tr key={notice.id}>
              <td>{index + 1}</td>
              <td>
                {notice.title}
                <a
                  href={notice.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-link"
                >
                 " Click Here"
                </a>
              </td>
              <td>{notice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notice;
