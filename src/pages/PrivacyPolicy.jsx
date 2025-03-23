import React from "react";
import "./PrivacyPolicy.css"; // Import CSS

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        Welcome to the <b>Integrated Crime Reporting Management System </b>Your privacy is important to us.
      </p>

      <h2>What Information We Collect</h2>
      <ul>
        <li>Personal Details (Name, Contact, Address)</li>
        <li>FIR Details (Date, Incident Location, Complaint Description)</li>
        <li>Device Information (IP Address, Browser Type, Location Data)</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Register & Process FIRs</li>
        <li>Investigate Complaints Efficiently</li>
        <li>Enhance Public Safety Measures</li>
        <li>Ensure Legal Compliance</li>
      </ul>

      <h2>Data Protection & Security</h2>
      <p>
        We follow strict security protocols to prevent unauthorized access, data
        breaches, or misuse of information.
      </p>

      <h2>Website Policies</h2>

      <h3>Terms of Use</h3>
      <p>
        Coimbatore District is managing the content of the website. Though all
        efforts have been made to ensure the accuracy and currency of the
        content on this website, the same should not be construed as a statement
        of law or used for any legal purposes. In no event will the Coimbatore
        district be liable for any expense, loss or damage including, without
        limitation, indirect or consequential loss or damage, or any expense,
        loss or damage whatsoever arising from use, or loss of use, of data,
        arising out of or in connection with the use of this Portal. Links to
        other websites that have been included on this Portal are provided for
        public convenience only. We cannot guarantee the availability of such
        linked pages at all times. These terms and conditions shall be governed
        by and construed in accordance with the Indian Laws. Any dispute arising
        under these terms and conditions shall be subject to the exclusive
        jurisdiction of the courts of India.{" "}
      </p>

      <h3>Copyright Policy</h3>
      <p>
        Material featured on this website may be reproduced free of charge after
        taking proper permission by sending a mail to us. However, the material
        has to be reproduced accurately and not to be used in a derogatory
        manner or in a misleading context. Wherever the material is being
        published or issued to others, the source must be prominently
        acknowledged. However, the permission to reproduce this material shall
        not extend to any material which is identified as being copyright of a
        third party. Authorisation to reproduce such material must be obtained
        from the departments/copyright holders concerned.{" "}
      </p>

      <h3>Privacy Policy</h3>
      <p>
        This website does not automatically capture any specific personal
        information from you, (like name, phone number or e-mail address), that
        allows us to identify you individually. If the website requests you to
        provide personal information, you will be informed for the particular
        purposes for which the information is gathered e.g. feedback form and
        adequate security measures will be taken to protect your personal
        information. We do not sell or share any personally identifiable
        information volunteered on the website site to any third party
        (public/private). Any information provided to this website will be
        protected from loss, misuse, unauthorized access or disclosure,
        alteration, or destruction. We gather certain information about the
        User, such as Internet protocol (IP) addresses, domain name, browser
        type, operating system, the date and time of the visit and the pages
        visited. We make no attempt to link these addresses with the identity of
        individuals visiting our site unless an attempt to damage the site has
        been detected.{" "}
      </p>

      <h3>Hyperlinking Policy</h3>
      <p>
        At many places in this website, you shall find links to other
        websites/portals. This links have been placed for your convenience. We
        can not guarantee that these links will work all the time and we have no
        control over availability of linked pages.
      </p>

      <p className="contact">
        <b>
          {" "}
          Coimbatore – 641018 | Email: collrcbe@nic.in | Phone: +91-422-2301114{" "}
        </b>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
