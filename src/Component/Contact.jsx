import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaGlobe,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    gender: "",
    address: "",
    mobile: "",
    altMobile: "",
    email: "",
    productName: "",
    description: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleEmailClick = () => {
    const emailAddress = "skypetelglobalhealthcarepvtltd@gmail.com";
    const subject = "Inquiry";
    const body = "Dear Skypetel Global Healthcare,";
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    const emailBody = `
      Name: ${feedback.name}
      Gender: ${feedback.gender}
      Address: ${feedback.address}
      Mobile No.: ${feedback.mobile}
      Alternative No.: ${feedback.altMobile}
      Email ID: ${feedback.email}
      Product Name: ${feedback.productName}
      Description/Comments: ${feedback.description}
    `;
    window.location.href = `mailto:skypetelglobalhealthcarepvtltd@gmail.com?subject=Feedback&body=${encodeURIComponent(
      emailBody
    )}`;
  };

  useEffect(() => {
    if (showFeedbackForm) {
      setIsFormVisible(true);
    } else {
      setIsFormVisible(false);
    }
  }, [showFeedbackForm]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl my-6 md:my-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-6 text-center">Contact Us</h2>
        <p className="text-base sm:text-lg md:text-lg text-blue-700 mb-6 md:mb-8 text-center">
          We're here to assist you! Feel free to reach out with your questions or feedback.
        </p>
        <div className="p-4 sm:p-5 md:p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
          <div className="flex items-center text-blue-900 mb-3 md:mb-4 cursor-pointer" onClick={handleEmailClick}>
            <FaEnvelope className="text-xl sm:text-2xl mr-2 md:mr-3" />
            <span className="text-sm sm:text-base md:text-lg font-medium">skypetelglobalhealthcarepvtltd@gmail.com</span>
          </div>
          <div className="flex items-center text-blue-900 mb-3 md:mb-4">
            <FaGlobe className="text-xl sm:text-2xl mr-2 md:mr-3" />
            <a
              href="https://www.skypetelglobalhealthcare.in"
              className="text-sm sm:text-base md:text-lg font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.skypetelglobalhealthcare.in
            </a>
          </div>
          <div className="flex items-center text-blue-900 mb-3 md:mb-4">
            <FaWhatsapp className="text-xl sm:text-2xl mr-2 md:mr-3 text-green-600" />
            <span className="text-sm sm:text-base md:text-lg font-medium">+91-7307198311</span>
          </div>
          <div className="flex items-center text-blue-900 mb-3 md:mb-4">
            <FaInstagram className="text-xl sm:text-2xl mr-2 md:mr-3 text-pink-600" />
            <a
              href="https://instagram.com/skypetelglobalhealthcare"
              className="text-sm sm:text-base md:text-lg font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              skypetelglobalhealthcare
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-10 text-center">
          <button
            className="bg-blue-600 text-white px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-lg shadow-lg hover:bg-blue-700 transition text-sm sm:text-base md:text-lg"
            onClick={() => setShowFeedbackForm(true)}
          >
            Give Feedback
          </button>
        </div>
        {showFeedbackForm && (
          <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50 px-2 sm:px-4">
            <div className="mt-16 md:mt-20">
              <div
                className={`bg-white p-4 sm:p-5 md:p-6 rounded-lg w-full max-w-md sm:max-w-lg transform transition-all duration-300 ease-in-out ${
                  isFormVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-20px]"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 md:mb-4">Feedback Form</h3>
                <form onSubmit={handleSubmitFeedback} className="space-y-2 md:space-y-3">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    required
                    onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                  />
                  <select
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    required
                    onChange={(e) => setFeedback({ ...feedback, gender: e.target.value })}
                  >
                    <option value="">Select Gender*</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Address*"
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    required
                    onChange={(e) => setFeedback({ ...feedback, address: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No.*"
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    required
                    onChange={(e) => setFeedback({ ...feedback, mobile: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email ID*"
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    required
                    onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                  />
                  <textarea
                    placeholder="Description/Comments*"
                    className="w-full p-2 border rounded text-sm sm:text-base"
                    required
                    onChange={(e) => setFeedback({ ...feedback, description: e.target.value })}
                  ></textarea>
                  <div className="flex justify-between">
                    <button className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base">Submit</button>
                    <button
                      type="button"
                      className="bg-gray-400 text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base"
                      onClick={() => setShowFeedbackForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;