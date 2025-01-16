import React from 'react';
import MissionSlider from "./MissionSlider";
import certificationsImage from "../Util/certificates2.jpg";


const CertificationCard = ({ title, description }) => (
  <div className=" container bg-white shadow-md rounded-lg p-4 m-4 transform transition duration-500 hover:scale-105">
    <h4 className="text-blue-900
     text-xl font-semibold mb-2">{title}</h4>
    <p className="text-blue-500">{description}</p>
  </div>
);
// #1E0065 purple color
                           
function CertificationsMain() {
  return (
    <div className="m-auto ">
      {/* <h2 className="text-[#1E0065] text-2xl font-bold mb-6">Certifications</h2>

      <p className="mb-4">
        At Skypetel Global Healthcare Pvt Ltd, we believe in the continuous improvement of our team. Our certifications are a testament to our commitment to excellence in the healthcare sector. Each certificate not only enhances our team's skills but also ensures that we provide the highest quality of care to our clients. Our ongoing training and certifications make us a leading choice in the healthcare industry.
      </p> */}
      <MissionSlider
        title="Certifications"
        description="At Skypetel Global Healthcare Pvt Ltd, we believe in the continuous improvement of our team. Our certifications are a testament to our commitment to excellence in the healthcare sector. Each certificate not only enhances our team's skills but also ensures that we provide the highest quality of care to our clients. Our ongoing training and certifications make us a leading choice in the healthcare industry."
        backgroundImage={certificationsImage}

      />
      <div className="flex flex-wrap justify-center bg-blue-100 py-5">
        {/* Card for upcoming certifications */}
        <CertificationCard
          title="Upcoming Certification 1"
          description="Details about upcoming certification."
        />
        <CertificationCard
          title="Upcoming Certification 2"
          description="Details about upcoming certification."
        />
        <CertificationCard
          title="Upcoming Certification 3"
          description="Details about your upcoming certification."
        />
        <CertificationCard
          title="Upcoming Certification 4"
          description="Details about your upcoming certification."
        />
        {/* Add more CertificationCard components as needed */}
      </div>
    </div>
  );
}

export default CertificationsMain;