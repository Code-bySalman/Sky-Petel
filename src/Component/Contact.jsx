import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaGlobe,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const handleEmailClick = () => {
    const emailAddress = "skypetelglobalhealthcarepvtltd@gmail.com";
    const subject = "Inquiry";
    const body = "Dear Skypetel Global Healthcare,";

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 mt-8 mb-8"
    >
      <div className="max-w-xl mx-auto p-8 rounded-xl shadow-lg my-8 ">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-lg text-blue-700 mb-8 text-center">
          We're here to assist you! Feel free to reach out with your questions
          or feedback.
        </p>

        <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 transform transition duration-500 hover:scale-105">
          <div
            className="flex items-center text-blue-900 mb-4 cursor-pointer"
            onClick={handleEmailClick}
          >
            <FaEnvelope className="text-2xl mr-3" />
            <span className="text-lg font-medium">
              <strong>skypetelglobalhealthcarepvtltd@gmail.com</strong>
            </span>
          </div>

          <div className="flex items-center text-blue-900 mb-4">
            <FaGlobe className="text-2xl mr-3" />
            <a
              href="https://www.skypetelglobalhealthcare.in"
              className="text-lg font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.skypetelglobalhealthcare.in
            </a>
          </div>

          <div className="flex items-center text-blue-900 mb-4">
            <FaWhatsapp className="text-2xl mr-3 text-green-600" />
            <span className="text-lg font-medium">
              <strong>+91-7307198311</strong>
            </span>
          </div>

          <div className="flex items-center text-blue-900 mb-4">
            <FaInstagram className="text-2xl mr-3 text-pink-600" />
            <a
              href="https://instagram.com/skypetelglobalhealthcare"
              className="text-lg font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              skypetelglobalhealthcare
            </a>
          </div>

          <div className="flex items-center text-blue-900">
            <FaFacebook className="text-2xl mr-3 text-blue-600" />
            <a
              href="https://facebook.com/Skypetel"
              className="text-lg font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Skypetel
            </a>
          </div>
        </div>

        {/* Career Opportunities Section */}
        <div className="mt-10 text-center">
  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
    Career Opportunities
  </h3>
  <p className="text-blue-700 text-lg">
    Join our team and make a difference in the healthcare industry.
  </p>
  <div className="flex flex-col items-center"> {/* Added flex-col and items-center */}
    <p className="text-blue-700 text-lg">
      Send your resume and cover letter to 
    </p>
    <div
      className="flex items-center text-blue-900 mb-4 cursor-pointer"
      onClick={handleEmailClick}
    >
      <div className="flex flex-row">
        <FaEnvelope className="text-2xl" />
        <span className="text-lg font-medium pl-2"> {/* Adjusted padding */}
          <strong>hrskypetelglobalhealthcare@gmail.com</strong>
        </span>
      </div>
    </div>
  </div>
</div>

        {/* Feedback Section */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Your Feedback Matters!
          </h3>
          <p className="text-blue-700 text-lg">
            Your opinions help us improve and provide better services. Thank you
            for choosing us!
          </p>
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-blue-500 italic">
            We're committed to delivering the best for you. Reach out anytime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;