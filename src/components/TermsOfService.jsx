import React from "react";
import "./TermsOfService.css";

const TermsOfService = ({ onClose }) => {
  return (
    <div className="terms-overlay">
      <div className="terms-container">
        <button onClick={onClose} className="close-btn">
          ✖
        </button>

        <h2>
          📜 Terms of Service 
          <br/>
          <br/> INTEGRATED CRIME REPORTING MANAGEMENT SYSTEM
        </h2>
        <p>
          <strong>Last Updated:</strong> 2025-03-22
        </p>

        <h3>Introduction</h3>
        <p>
          Welcome to the FIR (First Information Report) Management System. This
          system is designed to facilitate the electronic lodging, tracking, and
          management of FIRs. By accessing and using this system, you agree to
          comply with and be bound by these Terms of Service. If you do not
          agree with any part of these terms, please do not use our system.
        </p>

        <h3>User Responsibilities</h3>
        <ul>
          <li>
            <span role="img" aria-label="check">
              ✅
            </span>{" "}
            Provide accurate, truthful, and complete information when filing an
            FIR.
          </li>
          <li>
            <span role="img" aria-label="legal">
              ⚖️
            </span>{" "}
            Use the system only for lawful purposes related to reporting
            incidents to law enforcement.
          </li>
          <li>
            <span role="img" aria-label="warning">
              ⚠️
            </span>{" "}
            Do not misuse the system by submitting false FIRs or engaging in
            fraudulent activities.
          </li>
          <li>
            <span role="img" aria-label="lock">
              🔒
            </span>{" "}
            Unauthorized access to the system is strictly prohibited.
          </li>
          <li>
            <span role="img" aria-label="key">
              🔑
            </span>{" "}
            Maintain the confidentiality of your login credentials if
            applicable.
          </li>
          <li>
            <span role="img" aria-label="cooperation">
              🤝
            </span>{" "}
            Cooperate with law enforcement agencies and system administrators in
            investigations related to FIRs.
          </li>
        </ul>

        <h3>Privacy & Data Protection</h3>
        <p>
          <span role="img" aria-label="shield">
            🛡️
          </span>{" "}
          All data submitted through the system, including FIR details and user
          information, is securely stored and protected in accordance with
          applicable data protection laws. This data is used solely for law
          enforcement purposes related to the investigation and management of
          FIRs. Data may be shared with authorized law enforcement agencies as
          required by law. Users have the right to access, correct, or delete
          their personal data as permitted by law.
        </p>

        <h3>Limitation of Liability</h3>
        <p>
          <span role="img" aria-label="exclamation">
            ❗
          </span>{" "}
          The FIR Management System does not guarantee instant case resolutions,
          specific legal outcomes, or the accuracy of information provided by
          users. The system may be subject to interruptions. The system
          administrators shall not be liable for any damages arising from the
          use or inability to use the system, including but not limited to
          damages related to the filing or management of FIRs.
        </p>

        <h3>Intellectual Property</h3>
        <p>
          <span role="img" aria-label="copyright">
            ©️
          </span>{" "}
          All intellectual property rights related to the system, including the
          software and design, are owned by [Your Organization/Entity]. Users
          are prohibited from reproducing, distributing, or modifying any part
          of the system without explicit permission.
        </p>

        <h3>Modifications to Terms</h3>
        <p>
          <span role="img" aria-label="update">
            🔄
          </span>{" "}
          These Terms of Service may be updated at any time without prior
          notice. Users are responsible for reviewing these terms regularly.
          Continued use of the system constitutes acceptance of the updated
          terms.
        </p>

        <h3>Governing Law</h3>
        <p>
          <span role="img" aria-label="balance">
            ⚖️
          </span>{" "}
          These Terms of Service shall be governed by the laws of Coimbatore
          City Police. Any disputes arising from the use of the FIR Management
          System shall be resolved through the concerned authority .
        </p>

        <h3>Contact Information</h3>
        <p>
          <span role="img" aria-label="location">
            
          </span>{" "}
          Email: collrcbe@nic.in | Phone: +91-422-2301114
        </p>
        <p>Address: Coimbatore, Tamilnadu</p>
        <p>Phone: 0422-2300250</p>

        <h3>Severability</h3>
        <p>
          <span role="img" aria-label="puzzle">
            🧩
          </span>{" "}
          If any provision of these Terms of Service is deemed invalid, the
          remaining provisions shall continue in effect.
        </p>

        <h3>Entire Agreement</h3>
        <p>
          <span role="img" aria-label="handshake">
            🤝
          </span>{" "}
          These Terms of Service constitute the entire agreement between the
          user and the system administrators regarding the use of the FIR
          Management System.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
