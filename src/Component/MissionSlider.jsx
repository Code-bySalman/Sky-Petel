import React, { useState, useEffect } from "react";
import missionSliderImg from "../Util/missionSlider.jpg";

const MissionSlider = ({
  title,
  description,
  showImage = true,
  backgroundImage = missionSliderImg,
}) => {
  const [showSlider, setShowSlider] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true);
    }, 1000);

    return () => clearTimeout(timer);
  },);

  const handleReadMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative w-screen">
      {showImage && (
        <div
          className="w-screen h-96 md:h-[500px] lg:h-[600px]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      <div
        className={`absolute top-0 left-0 h-full w-1/2 bg-white bg-opacity-60 flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${
          showSlider ? "translate-x-0" : "-translate-x-2/3"
        }`}
      >
        <div className="px-4 py-8 md:py-16 w-full">
          <h1 className="text-blue-900 text-2xl md:text-3xl font-bold text-center">
            {title}
          </h1>

          <button
            className="mt-4 text-blue-600 font-semibold hover:underline focus:outline-none mx-auto block"
            onClick={handleReadMoreClick}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              {title}
            </h2>
            <div className="max-h-96 overflow-y-auto px-4"> 
              <p className="text-blue-900 text-sm md:text-base">
                {description}
              </p>
            </div>
            <button
              className="mt-4 inline-block px-6 py-3 bg-blue-900 text-white text-lg font-semibold rounded hover:bg-blue-500 transition"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionSlider;