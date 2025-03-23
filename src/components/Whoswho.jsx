import React from "react";
import "./Whoswho.css";

const WhosWho = () => {
  const developmentData = [
    {
      name: "Thiru. Sanket Balwant Waghe I.A.S.",
      designation: "Additional Collector (Development)",
      email: "drdacbe@nic.in",
      address:
        "District Rural Development Agency (DRDA), Collectorate Building, Coimbatore- 641018",
      phone: "0422-2301547",
    },
    {
      name: "Thiru.G.Dwarakanathsingh",
      designation: "Assistant Director of Town Panchayats",
      email: "adtpcbe@gmail.com",
      address: "3rd Floor, Collectorate, Coimbatore - 641 018.",
      phone: "0422-2301210",
    },
  ];
const revenueData = [
  {
    name: "Thiru. Pavankumar G Giriyappanavar I.A.S.",
    designation: "District Collector",
    email: "collrcbe@nic.in",
    address: "Collectorate Building Coimbatore- 641018",
    phone: "0422-2301114",
  },
  {
    name: "Dr. M. Sharmila",
    designation: "District Revenue Officer",
    email: "drotncbe@nic.in",
    address: "Collectorate Building Coimbatore- 641018",
    phone: "0422-2301114",
  },
  {
    name: "Selvi. A.Catherine Saranya, I.A.S,",
    designation: "Sub Collector, Pollachi",
    email: "collrcbe@gmail.com",
    address: "O/o Sub Collector Pollachi.",
    phone: "9445000445",
  },
  {
    name: "Thiru P.K. Govindan",
    designation:
      "Revenue Divisional Officer Coimbatore (North) Revenue Division",
    email: "rdocoimbatorenorth@gmail.com",
    address:
      "Revenue Divisional Office Coimbatore (North) Kavundampalayam Coimbatore",
    phone: "0422-2644450",
  },
  {
    name: "Thiru. Pandarinathan",
    designation:
      "Revenue Divisional Officer Coimbatore (South) Revenue Division",
    email: "rdoco.tncbe@gov.in",
    address:
      "Coimbatore (South) Revenue Divisional Office State Bank Road Coimbatore- 641018",
    phone: "0422-2300424",
  },
];
const nicData = [
  {
    name: "Thiru K. Venkatesh",
    designation: "District Informatics Officer",
    email: "dio-cmt@nic.in",
    address:
      "Room No 23, Ground Floor New Collector's Building Collectorate Coimbatore -641018",
    phone: "0422-2301892",
  },
];
  const otherDepartments = [
    {
      name: "Dr.R.Perumalsamy, BVSC.",
      designation: "Regional Joint Director",
      email: "rjdachcbe@gmail.com",
      address:
        "Regional Joint Director Office, Veterinary Poly Clinic Campus, Townhall, Coimbatore-641 001.",
      phone: "0422-2381900",
    },
    {
      name: "Thiru. A.S.Viswanathan",
      designation: "Divisional Engineer (Highways)",
      email: "dehnabardandrrcbe@yahoo.co.in",
      address:
        "O/o Divisional Engineer, NABARD & Rural Roads, 1661 Trichy Road, Coimbatore-18",
      phone: "0422-2300032",
    },
    {
      name: "Thiru. P. Siddharthan",
      designation: "Deputy Director Of Horticulture",
      email: "ddhcoimbatore@yahoo.com",
      address:
        "Deputy Director of Horticulture, 1422, Thadagam Road, GCT post, Coimbatore-641013.",
      phone: "7708917292",
    },
    {
      name: "Thiru.D.Balathandautham",
      designation: "Assistant Commissioner of Labour (Social Security Scheme)",
      email: "lossskovi@gmail.com",
      address:
        "O/o Assistant Commissioner of Labour (Social Security Scheme) 1847, Trichy Road, Ramanathapuram, Coimbatore-641045",
      phone: "0422-2324988",
    },
    {
      name: "Thiru. A.Senthil Anna",
      designation: "INFORMATION AND PUBLIC RELATIONS OFFICER",
      email: "cbeipro@gmail.com",
      address:
        "Information And Public Relations Officer, Collectorate, Coimbatore-641018",
      phone: "0422-2301060",
    },
    {
      name: "Thiru. N.Murugesan B.Sc.,B.Ed.,M.A.",
      designation: "District Backward Classes Welfare Officer",
      email: "dbcwocbe@gmail.com",
      address: "District Backward Classes welfare office, Coimbatore.",
      phone: "0422-2300404",
    },
  ];

  return (
    <div className="whoswho-container">
      <h1>Revenue</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {revenueData.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.designation}</td>
              <td>{person.email}</td>
              <td>{person.address}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Development</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {developmentData.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.designation}</td>
              <td>{person.email}</td>
              <td>{person.address}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ;<h1>Other Department</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {otherDepartments.map((department, index) => (
            <tr key={index}>
              <td>{department.name}</td>
              <td>{department.designation}</td>
              <td>{department.email}</td>
              <td>{department.address}</td>
              <td>{department.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>NIC</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {nicData.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.designation}</td>
              <td>{person.email}</td>
              <td>{person.address}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WhosWho;
