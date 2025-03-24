import React, { useState } from "react";
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

  return (
    <div className="min-h-screen flex items-center justify-center mt-8 mb-8">
      <div className="max-w-xl mx-auto p-8 rounded-xl my-8">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">Contact Us</h2>
        <p className="text-lg text-blue-700 mb-8 text-center">
          We're here to assist you! Feel free to reach out with your questions or feedback.
        </p>

        <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
          <div className="flex items-center text-blue-900 mb-4 cursor-pointer" onClick={handleEmailClick}>
            <FaEnvelope className="text-2xl mr-3" />
            <span className="text-lg font-medium">skypetelglobalhealthcarepvtltd@gmail.com</span>
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
            <span className="text-lg font-medium">+91-7307198311</span>
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
        </div>

        <div className="mt-10 text-center">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            onClick={() => setShowFeedbackForm(true)}
          >
            Give Feedback
          </button>
        </div>

        {showFeedbackForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Feedback Form</h3>
              <form onSubmit={handleSubmitFeedback} className="space-y-3">
                <input type="text" placeholder="Name*" className="w-full p-2 border rounded" required onChange={(e) => setFeedback({ ...feedback, name: e.target.value })} />
                <select className="w-full p-2 border rounded" required onChange={(e) => setFeedback({ ...feedback, gender: e.target.value })}>
                  <option value="">Select Gender*</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input type="text" placeholder="Address*" className="w-full p-2 border rounded" required onChange={(e) => setFeedback({ ...feedback, address: e.target.value })} />
                <input type="tel" placeholder="Mobile No.*" className="w-full p-2 border rounded" required onChange={(e) => setFeedback({ ...feedback, mobile: e.target.value })} />
                <input type="email" placeholder="Email ID*" className="w-full p-2 border rounded" required onChange={(e) => setFeedback({ ...feedback, email: e.target.value })} />
                <textarea placeholder="Description/Comments*" className="w-full p-2 border rounded" required onChange={(e) => setFeedback({ ...feedback, description: e.target.value })}></textarea>
                <div className="flex justify-between">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
                  <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded" onClick={() => setShowFeedbackForm(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
