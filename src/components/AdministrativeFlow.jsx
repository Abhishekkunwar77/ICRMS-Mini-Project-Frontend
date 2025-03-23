import React from "react";
import "./AdministrativeFlow.css";

const officersData = [
  {
    id: 1,
    name: "Shri Mukesh, IPS",
    designation: "Commissioner of Police, Coimbatore",
    officeNumber: "2335-8286",
    cugNumber: "9147889460",
    email: "cpbidhannagar@gmail.com",
  },
  {
    id: 2,
    name: "Shri Badana Varun Chandra Sekhar, IPS",
    designation: "Jt. CP (HQ), Coimbatore Police Commissionerate",
    officeNumber: "2335-2011",
    cugNumber: "9147889469",
    email: "jtcpbdn@policewb.gov.in",
  },
  {
    id: 3,
    name: "Ms. Aishwariya Sagar, IPS",
    designation: "DCP Airport Division",
    officeNumber: "2324-2143",
    cugNumber: "9147782023",
    email: "dcp-airport@policewb.gov.in",
  },
  {
    id: 4,
    name: "Dr. Sonawane Kuldip Suresh, IPS",
    designation: "DCP DD, CBEPC",
    officeNumber: "2324-1111",
    cugNumber: "9178425488",
    email: "dcdd.bidhan@policewb.gov.in",
  },
  {
    id: 5,
    name: "Shri Manav Singla, IPS",
    designation: "DCP New TOWN",
    officeNumber: "2324-1074",
    cugNumber: "9147852366",
    email: "dcp-newtown@policewb.gov.in",
  },
  {
    id: 6,
    name: "Shri Aneesh Sarkar, IPS",
    designation: "DCP BDN",
    officeNumber: "2334-8287",
    cugNumber: "9147531589",
    email: "dcp-bdn@policewb.gov.in",
  },
  {
    id: 7,
    name: "Shri Nima Norbu Bhutia, IPS",
    designation: "DCP Traffic, CBEPC",
    officeNumber: "2324-1073",
    cugNumber: "9183043484",
    email: "dcptrafficbdn@gmail.com",
  },
  {
    id: 8,
    name: "Tauseef Ali Azhar, IPS",
    designation: "Addl. Charge of ADCP SB",
    officeNumber: "2334-7009",
    cugNumber: "9147890268",
    email: "dcsbbdn@policewb.gov.in",
  },
  {
    id: 9,
    name: "Shri Chandan Ghosh, WBPS",
    designation: "Addl. DCP DD , CBEPC",
    officeNumber: "2335-8283",
    cugNumber: "9147185207",
    email: "CBEPCaddc@gmail.com",
  },
  {
    id: 10,
    name: "Manish Joshi, IPS",
    designation: "Addl. DCP, Coimbatore Division , CBEPC",
    officeNumber: "2334-7009",
    cugNumber: "9145893658",
    email: "adcpbdn@policewb.gov.in",
  },
];

const AdministrativeFlow = () => {
  return (
    <div className="admin-container">
      <h2>Administrative Flow - ICRMS </h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name of the Officer</th>
            <th>Designation</th>
            <th>Office Number</th>
            <th>CUG Number</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {officersData.map((officer) => (
            <tr key={officer.id}>
              <td>{officer.id}</td>
              <td>{officer.name}</td>
              <td>{officer.designation}</td>
              <td>{officer.officeNumber}</td>
              <td>{officer.cugNumber}</td>
              <td>{officer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdministrativeFlow;
