import React from "react";
import { FaStethoscope, FaHeartbeat, FaUserMd, FaBriefcaseMedical, FaVial, FaAmbulance } from "react-icons/fa";

const services = [
  { icon: <FaStethoscope />, title: "General Consultation", description: "Comprehensive general health assessments and consultations with our experienced doctors." },
  { icon: <FaHeartbeat />, title: "Cardiology", description: "Specialized cardiac care for a wide range of heart conditions and preventive measures." },
  { icon: <FaUserMd />, title: "Specialist Appointments", description: "Appointments with specialists in various fields including orthopedics, neurology, and more." },
  { icon: <FaBriefcaseMedical />, title: "Emergency Care", description: "24/7 emergency services with rapid response and expert medical support." },
  { icon: <FaVial />, title: "Laboratory Services", description: "Accurate lab tests and diagnostics conducted with the latest technology." },
  { icon: <FaAmbulance />, title: "Ambulance Services", description: "Fast and reliable ambulance services available around the clock." },
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center border-t-4 border-blue-900 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="text-blue-900 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
