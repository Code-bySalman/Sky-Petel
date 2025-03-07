import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import image1 from "../Util/Homepage.jpg";

const ImgSlider = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src={image1}
          alt="Background"
          className="w-full max-h-full object-fill"
        />
      </div>

      {/* Half-transparent slider with slide-in effect */}
      <div
        className={`absolute top-0 left-0 h-full w-full md:w-1/2 bg-white bg-opacity-60 flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${
          showSlider ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-center p-8 md:p-16">
          <h1 className="text-blue-900 text-2xl md:text-4xl font-semibold mb-4">
            Transforming Healthcare, Globally
          </h1>
          <NavLink
            to="/about-us"
            className="inline-block px-6 py-3 bg-blue-900 text-white text-lg font-semibold rounded hover:bg-blue-500 transition"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;