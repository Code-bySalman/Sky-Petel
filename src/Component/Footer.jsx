import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E0065] text-white py-2 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0 px-4 h-auto pt-3">

        <div className="flex flex-col space-y-1">
          <h3 className="text-sm font-semibold">Contact Us</h3>
          <p className="text-xs">Email: skypetelglobalhealthcarepvtltd@gmail.com</p>
          <p className="text-xs">Website: www.skypetelglobalhealthcare.in</p>
          <p className="text-xs">Phone: +91-7307198311</p>
        </div>

        <div className="flex flex-col space-y-1 ">
          <h3 className="text-sm font-semibold">Office Addresses</h3>
          <p className="text-xs">1) 329/A, Manuel Pereira Father Peter Pereira Road, Kurla (W) Mumbai-4000 India.</p>
          <p className="text-xs">2) Apartment no. 4208 Block-Laurel, Mahagun Mywoods, Sector 16, Greater Noida (West), India.</p>
          <p className="text-xs">3) 5, Narayan Garden, Awadh Vihar, Hardoi Road, Lucknow-226003(U.P) India.</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/skypetelglobalhealthcare" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/skypetelglobalhealthcare" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-2 text-center text-xs text-gray-400">
        © 2024 Skypetel Global Healthcare Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
