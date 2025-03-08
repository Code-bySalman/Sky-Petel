import React from "react";
import { useNavigate } from "react-router-dom";
import OurProduct from "../Util/OurProducts.jpg";

const Project1 = () => {
  const navigate = useNavigate();

  const handleCoreValuesClick = () => {
    
    navigate("/our-products",{ state: { scrollToBottom: false } }); 
  };

  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16 mb-10"> 
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-6 text-blue-900 text-center">
      Our Products.
      </h1>
      <div className="flex flex-col-reverse md:flex-row bg-blue-100 h-auto md:h-[300px] w-full rounded-lg"> 
        <div className="p-4 md:p-8 lg:p-12 w-full md:w-1/2"> 
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-900 text-center md:text-left"> 
            Explore Our Comprehensive Product Range!
          </p>
          <button
            onClick={handleCoreValuesClick}
            className="mt-4 md:mt-8 lg:mt-12 w-full md:w-auto px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition-colors duration-300" 
          >
            Our Products
          </button>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden flex justify-end "> 
          <img
            src={OurProduct}
            alt="imgMission"
            className=" pt-5 pb-5 mr-32 h-[200px] md:h-[250px] lg:h-[300px] w-96 rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Project1;