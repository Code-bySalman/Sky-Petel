import React from "react";
import { FaEnvelope, FaGlobe, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E0065] text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 px-4"> 

        {/* Contact Information */}
        <div className="flex flex-col space-y-2"> 
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="text-sm">Email: skypetelglobalhealthcarepvtltd@gmail.com</p>
          <p className="text-sm">Website: www.skypetelglobalhealthcare.in</p>
          <p className="text-sm">Phone: +91-7307198311</p>
        </div>

        {/* Office Addresses */}
        <div className="flex flex-col space-y-2 mb-4 md:mb-0"> {/* Added mb-4 md:mb-0 */}
          <h3 className="text-xl font-bold">Office Addresses</h3>
          <p className="text-sm">1) 329/A, Manuel Pereira Father Peter Pereira Road, Kurla (W) Mumbai-4000 India.</p>
          <p className="text-sm">2) Apartment no. 4208 Block-Laurel, Mahagun Mywoods, Sector 16, Greater Noida (West), India.</p>
          <p className="text-sm">3) 5, Narayan Garden, Awadh Vihar, Hardoi Road, Lucknow-226003(U.P) India.</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center"> 
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Instagram */}
            <a href="https://www.instagram.com/skypetelglobalhealthcare" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/skypetelglobalhealthcare" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            {/* Facebook */} 
            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer"> 
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" 
                alt="Facebook"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-600"></div>

      {/* Footer Note */}
      <div className="mt-4 text-center text-sm text-gray-400">
        © 2024 Skypetel Global Healthcare Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;